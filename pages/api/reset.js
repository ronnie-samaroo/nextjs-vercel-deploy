import clientPromise from '../../lib/mongodb'
import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '../../lib/session'

async function handler(req, res) {
    const client = await clientPromise
    try {
        const db = client.db('Next-Dash')
        const { username, password } = await req.body
        const users = db.collection('Users')
        const oneUser = await users.find({ username }).toArray()
        if (!oneUser.length) {
            res.status(200).json({ success: true, message: 'Invalid Credential' })
        } else {
            const filter = { username: username }
            const updateDoc = {
                $set: {
                    password: password,
                },
            }
            await users.updateOne(filter, updateDoc)
        }

        res.status(200).json({ success: true, message: 'Password has Successfully Updated' })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

export default withIronSessionApiRoute(handler, sessionOptions)
