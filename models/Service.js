import mongoose from 'mongoose'

const Schema = mongoose.Schema

const serviceSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
})

mongoose.models = {}

const Service = mongoose.models('Service', serviceSchema)

export default Service
