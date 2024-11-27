import mongoose, { Schema } from "mongoose";

const artistSchema = new Schema({
    name: String,
    gender: String,
    country: String
})

export const artistModel = new mongoose.model('Artistas', artistSchema)