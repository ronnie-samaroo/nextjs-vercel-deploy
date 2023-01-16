import clientPromise from '../../../../lib/mongodb'

async function handler(req, res) {
    const client = await clientPromise
    try {
        const db = client.db('Next-Dash')
        const { announcement } = await req.body
        const announcements = db.collection('Announcement')
        const exist = await announcements.find({ name: announcement }).toArray()
        if (exist.length) {
            res.status(200).json({
                success: false,
                message: `${announcement} already exist in the database`,
            })
        } else {
            await announcements.insertOne({ name: announcement })
        }

        res.status(200).json({ success: true, message: 'successfully added' })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

export default handler
