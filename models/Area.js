import mongoose from 'mongoose'

const Schema = mongoose.Schema

const areaSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
})

mongoose.models = {}

const Area = mongoose.models('Area', areaSchema)

export default Area
