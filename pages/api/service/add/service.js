import clientPromise from '../../../../lib/mongodb'

async function handler(req, res) {
    const client = await clientPromise
    try {
        const db = client.db('Next-Dash')
        const { service } = await req.body
        const servicies = db.collection('Service')
        const exist = await servicies.find({ name: service }).toArray()
        if (exist.length) {
            res.status(200).json({
                success: false,
                message: `${service} already exist in the database`,
            })
        } else {
            await servicies.insertOne({ name: service })
        }

        res.status(200).json({ success: true, message: 'successfully added' })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

export default handler
