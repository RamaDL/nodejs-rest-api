import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import usersRoutes from './routes/users.js'

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use('/users', usersRoutes);

app.listen(
    process.env.PORT, 
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
)