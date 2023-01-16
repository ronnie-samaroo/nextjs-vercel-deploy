import mongoose from 'mongoose'

const Schema = mongoose.Schema

const announcementSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        default: false,
    },
})

mongoose.models = {}

const Announcement = mongoose.model('Announcement', announcementSchema)

export default Announcement
