import clientPromise from '../../../../lib/mongodb'
import { ObjectId } from 'mongodb'

async function handler(req, res) {
    const client = await clientPromise
    try {
        const db = client.db('Next-Dash')
        const streetsCollection = db.collection('Street')
        const {name, recordId} = req.body
        const streets = await streetsCollection.updateOne({_id: ObjectId(recordId)}, {$set: {"name": name, category: 'street'}})
        if (streets.modifiedCount === 1) {
            res.status(200).json({ success: true, message: 'successfully updated' })
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

export default handler
