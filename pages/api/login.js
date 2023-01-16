import clientPromise from '../../lib/mongodb'

import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '../../lib/session'

async function handler(req, res) {
    try {
        const client = await clientPromise
        const db = client.db('Next-Dash')
        const { username, password } = await req.body
        const oneUser = await db.collection('Users').find({ username }).toArray()
        if (!oneUser.length) {
            res.status(200).json({ success: false, message: 'Invalid credentials' })
            return
        } else {
            if (oneUser[0].password !== password) {
                res.status(200).json({ success: false, message: 'Invalid Password' })
                return
            }
        }

        const user = { isLoggedIn: true }
        await req.session.save()
        req.session.user = user
        res.json({
            success: true,
            message: 'successfully signed in',
            user,
        })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

export default withIronSessionApiRoute(handler, sessionOptions)
