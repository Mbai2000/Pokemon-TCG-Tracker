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
        /*supertype: {
            type: String,
            required: true
        },
        subtypes: {
            type: [String],
            required: true
        },
        level: {
            type: String,
            required: true
        },
        hp: {
            type: String,
            required: true
        },
        types: {
            type: [String],
            required: true
        },
        evolvesFrom: {
            type: String,
            required: true
        },
        evolvesTo: {
            type: String,
            required: true
        },
        rules: {
            type: String,
            required: true
        },
        name: {
            type: String,
        },
        name: {
            type: String,
        },
        name: {
            type: String,
        },
        name: {
            type: String,
        },
        name: {
            type: String,
        },
        name: {
            type: String,
        },
        name: {
            type: String,
        },
        name: {
            type: String,
        },
        name: {
            type: String,
        },
        name: {
            type: String,
        },
        name: {
            type: String,
        },
        name: {
            type: String,
        },*/
    }
);

export const Card = mongoose.model('Card', cardSchema);