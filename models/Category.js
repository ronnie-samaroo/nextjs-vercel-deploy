import mongoose from 'mongoose'

const Schema = mongoose.Schema

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
})

mongoose.models = {}

const Category = mongoose.models('Category', categorySchema)

export default Category
