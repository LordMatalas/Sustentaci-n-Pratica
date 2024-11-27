import mongoose, { Schema } from "mongoose";

const albumSchema = new Schema({
    name: String,
    author: String,
    year: Number
})

export const albumModel = new mongoose.model('Álbumes', albumSchema)