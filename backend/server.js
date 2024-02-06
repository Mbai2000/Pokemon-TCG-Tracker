import express from "express";
import { PORT } from "./config.js";
import mongoose from "mongoose";
import router from "./routes/cardsRoute.js";
import cors from 'cors';
import dotenv from 'dotenv'

dotenv.config();
const app = express();
const url = process.env.MONGODB_URL
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

mongoose.connect(url)
.then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`);
    });
})
.catch((error) => {
    console.log(error);
});