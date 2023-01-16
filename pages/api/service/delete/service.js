import clientPromise from '../../../../lib/mongodb'
import { ObjectId } from 'mongodb'

async function handler(req, res) {
    const client = await clientPromise
    try {
        const db = client.db('Next-Dash')
        const serviceCollection = db.collection('Service')
        const { id } = req.body
        const rep = await serviceCollection.deleteOne({ _id: ObjectId(id) })
        if (rep.deletedCount === 1) {
            res.status(200).json({ success: true, message: 'Successfully deleted' })
        } else {
            res.status(200).json({ success: false, message: 'Failed on deleting' })
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

export default handler
