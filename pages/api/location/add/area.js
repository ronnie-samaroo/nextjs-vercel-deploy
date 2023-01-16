import clientPromise from '../../../../lib/mongodb'

async function handler(req, res) {
    const client = await clientPromise
    try {
        const db = client.db('Next-Dash')
        const { area } = await req.body
        const countries = db.collection('Area')
        const exist = await countries.find({ name: area }).toArray()
        if (exist.length) {
            res.status(200).json({
                success: false,
                message: `${area} already exist in the database`,
            })
        } else {
            await countries.insertOne({ name: area, category: 'area' })
        }

        res.status(200).json({ success: true, message: 'successfully added' })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

export default handler
