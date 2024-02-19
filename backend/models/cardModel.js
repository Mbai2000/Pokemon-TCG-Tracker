import mongoose from "mongoose";

const cardSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        number: {
            type: String,
            required: true
        },
        version: {
            type: String,
            required: true
        },
        set: {
            type: String,
            required: true
        },
        edition: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        market: {
            type: String,
            required: true
        }
    }
);

export const Card = mongoose.model('Card', cardSchema);