import clientPromise from '../../../../lib/mongodb'
import { ObjectId } from 'mongodb'

async function handler(req, res) {
    const client = await clientPromise
    try {
        const db = client.db('Next-Dash')
        const countryCollection = db.collection('Country')
        const {name, recordId} = req.body
        const countries = await countryCollection.updateOne({_id: ObjectId(recordId)}, {$set: {"name": name, category: 'country'}})
        if (countries.modifiedCount === 1) {
            res.status(200).json({ success: true, message: 'successfully updated' })
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

export default handler
