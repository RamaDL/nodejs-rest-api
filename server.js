import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.listen(
    process.env.PORT, 
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
)