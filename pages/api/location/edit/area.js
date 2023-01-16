import clientPromise from '../../../../lib/mongodb'
import { ObjectId } from 'mongodb'

async function handler(req, res) {
    const client = await clientPromise
    try {
        const db = client.db('Next-Dash')
        const areaCollection = db.collection('Area')
        const {name, recordId} = req.body
        const areas = await areaCollection.updateOne({_id: ObjectId(recordId)}, {$set: {"name": name, category: 'area'}})
        if (areas.modifiedCount === 1) {
            res.status(200).json({ success: true, message: 'successfully updated' })
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

export default handler
