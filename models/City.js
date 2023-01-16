import mongoose from 'mongoose'

const Schema = mongoose.Schema

const citySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
})

mongoose.models = {}

const City = mongoose.models('City', citySchema)

export default City
