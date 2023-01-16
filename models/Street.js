import mongoose from 'mongoose'

const Schema = mongoose.Schema

const streetSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
})

mongoose.models = {}

const Street = mongoose.models('Street', streetSchema)

export default Street
