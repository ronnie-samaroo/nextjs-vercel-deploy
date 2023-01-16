import clientPromise from '../../../../lib/mongodb'

async function handler(req, res) {
    const client = await clientPromise
    try {
        const db = client.db('Next-Dash')
        const { country } = await req.body
        const countries = db.collection('Country')
        const exist = await countries.find({ name: country }).toArray()
        if (exist.length) {
            res.status(200).json({
                success: false,
                message: `${country} already exist in the database`,
            })
        } else {
            await countries.insertOne({ name: country, category: 'country' })
        }

        res.status(200).json({ success: true, message: 'successfully added' })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

export default handler
