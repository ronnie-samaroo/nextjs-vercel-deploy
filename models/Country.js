import mongoose from 'mongoose'

const Schema = mongoose.Schema

const countrySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
})

mongoose.models = {}

const Country = mongoose.models('Country', countrySchema)

export default Country
