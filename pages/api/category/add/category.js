import clientPromise from '../../../../lib/mongodb'

async function handler(req, res) {
    const client = await clientPromise
    try {
        const db = client.db('Next-Dash')
        const { category } = await req.body
        const categories = db.collection('Category')
        const exist = await categories.find({ name: category }).toArray()
        if (exist.length) {
            res.status(200).json({
                success: false,
                message: `${category} already exist in the database`,
            })
        } else {
            await categories.insertOne({ name: category })
        }

        res.status(200).json({ success: true, message: 'successfully added' })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

export default handler
