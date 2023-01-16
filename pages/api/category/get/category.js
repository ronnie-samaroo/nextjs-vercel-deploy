import clientPromise from '../../../../lib/mongodb'

async function handler(req, res) {
    const client = await clientPromise
    try {
        const db = client.db('Next-Dash')
        const categoryCollection = db.collection('Category')
        const categories = await categoryCollection.find({}).toArray()

        res.status(200).json({ success: true, data: categories })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

export default handler
