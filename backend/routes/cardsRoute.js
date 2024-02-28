import express from "express";
import { Card } from "../models/cardModel.js";

const router = express.Router();

router.get('/', async (request,response) => {
    try {
        const cards = await Card.find({}).sort({name:1});
        
        return response.status(200).json({
            count: cards.length,
            data: cards
        })
    } catch (error) {
        response.status(500).send({message: error.message});
    }
});
// Read
router.get('/:id', async (request,response) => {
    try {
        const { id } = request.params;
        const card = await Card.findById(id);
        
        return response.status(200).json(card);
    } catch (error) {
        response.status(500).send({message: error.message});
    }
});
// Create
router.post('/', async (request,response) => {
    try {
        if (!request.body.name || !request.body.number || !request.body.set || !request.body.image || !request.body.date || !request.body.normal || !request.body.holo || !request.body.reverse) {
            return response.status(400).send({message: 'Please include all the required fields of name, number, set, image, and market values with the corresponding date'})
        }
        const card = {
            name: request.body.name,
            number: request.body.number,
            set: request.body.set,
            image: request.body.image,
            date: request.body.date,
            normal: request.body.normal,
            holo: request.body.holo,
            reverse: request.body.reverse,
        }

        const newCard = await Card.create(card);
        return response.status(201).send({message: 'Card Added'});
    } catch (error) {
        response.status(500).send({message: error.message});
    }
});
// Update
router.put('/:id', async (request, response) => {
    try {
        if (!request.body.name || !request.body.number || !request.body.set || !request.body.image || !request.body.date || !request.body.normal || !request.body.holo || !request.body.reverse) {
            return response.status(400).send({message: 'Please include all the required fields of name, number, set, image, and market values with the corresponding date'})
        }
        const { id } = request.params;
        const update = await Card.findByIdAndUpdate(id, request.body);
        if (!update) {
            return response.status(404).json({message: 'No Card Found'});
        }
        return response.status(200).send({message: 'Update Successful'})
    } catch (error) {
        response.status(500).send({message: error.message});
    }
});

//Delete
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const del = await Card.findByIdAndDelete(id);
        if(!del) {
            return response.status(404).json({message: 'No Card Found'});
        }
        return response.status(200).send({ message: 'Delete Successful'});

    } catch (error) {
        response.status(500).send({message: error.message});
    }
});

export default router;