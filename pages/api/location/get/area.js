import clientPromise from '../../../../lib/mongodb'

async function handler(req, res) {
    const client = await clientPromise
    try {
        const db = client.db('Next-Dash')
        const areaCollection = db.collection('Area')
        const areas = await areaCollection.find({}).toArray()

        res.status(200).json({ success: true, data: areas })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

export default handler
