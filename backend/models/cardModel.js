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
        set: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        normal: {
            type: String,
            required: true
        },
        holo: {
            type: String,
            required: true
        },
        reverse: {
            type: String,
            required: true
        },
    }
);

export const Card = mongoose.model('Card', cardSchema);