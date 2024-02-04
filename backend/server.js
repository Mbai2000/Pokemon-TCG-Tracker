import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import router from "./routes/cardsRoute.js";
import cors from 'cors';

const app = express();

app.use(express.json());

//default cors
app.use(cors());

// Custom Origin CORS
/*app.use(
    cors({
    origin: 'httpe://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
}));*/

app.use('/cards', router);

mongoose.connect(mongoDBURL)
.then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`);
    });
})
.catch((error) => {
    console.log(error);
});