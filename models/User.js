import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    dateofbirth: {
        type: String,
        required: true,
    },
    consent: [
        {
            type: String,
            required: true,
        },
    ],
    limit: {
        type: String,
        default: '1',
    },
    roles: [
        {
            type: String,
            required: true,
        },
    ],
    active: {
        type: Boolean,
        default: true,
    },
})

mongoose.models = {}

const User = mongoose.model('User', userSchema)

export default User
