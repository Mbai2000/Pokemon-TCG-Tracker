import express from "express";
import { Card } from "../models/cardModel.js";
import pokemon from 'pokemontcgsdk';

pokemon.configure({apiKey: `${process.env.TCG_API_KEY}`});

const router = express.Router();

function searchPokemonCards(search) {
    
}


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

export default router;