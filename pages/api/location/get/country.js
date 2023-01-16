import clientPromise from '../../../../lib/mongodb'

async function handler(req, res) {
    const client = await clientPromise
    try {
        const db = client.db('Next-Dash')
        const countryCollection = db.collection('Country')
        const countries = await countryCollection.find({}).toArray()

        res.status(200).json({ success: true, data: countries })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

export default handler
