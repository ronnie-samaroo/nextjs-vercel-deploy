import clientPromise from '../../../../lib/mongodb'

async function handler(req, res) {
    const client = await clientPromise
    try {
        const db = client.db('Next-Dash')
        const { street } = await req.body
        const countries = db.collection('Street')
        const exist = await countries.find({ name: street }).toArray()
        if (exist.length) {
            res.status(200).json({
                success: false,
                message: `${street} already exist in the database`,
            })
        } else {
            await countries.insertOne({ name: street, category: 'street' })
        }

        res.status(200).json({ success: true, message: 'successfully added' })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

export default handler
