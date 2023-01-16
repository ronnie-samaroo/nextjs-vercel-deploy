import request from 'request'
import clientPromise from '../../lib/mongodb'
import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '../../lib/session'
import jwt from 'jsonwebtoken'

async function handler(req, res) {
    try {
        const client = await clientPromise
        const db = client.db('Next-Dash')
        const { username } = await req.body
        const oneUser = await db.collection('Users').find({ username }).toArray()
        if (!oneUser.length) {
            res.status(200).json({ success: false, message: 'Invalid Username' })
        }

        const token = jwt.sign({ username: username }, 'Next-Dash', { expiresIn: '30m' })
        const currentDomain = process.env.NEXT_PUBLIC_DOMAIN

        request.post(
            {
                headers: {
                    'content-type': 'application/json',
                    Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_SENDGRID_API_KEY,
                },
                url: 'https://api.sendgrid.com/v3/mail/send',
                json: {
                    personalizations: [
                        {
                            to: [
                                {
                                    email: username,
                                    name: '257 Defi',
                                },
                            ],
                            subject: 'Please reset your password using the link below',
                        },
                    ],
                    content: [
                        {
                            type: 'text/plain',
                            value: `Please reset your password here: ${currentDomain}/reset/${token}`,
                        },
                    ],
                    from: {
                        email: 'no-reply@257defi.com',
                        name: '257DeFi',
                    },
                },
            },
            function (err) {
                if (err) {
                    console.log('send mail error: ', err)
                    res.status(500).json({
                        message: 'There was an error while sending an email',
                        error: err.message,
                    })
                }
            },
        )

        res.status(200).json({ success: true, email: username })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export default withIronSessionApiRoute(handler, sessionOptions)
