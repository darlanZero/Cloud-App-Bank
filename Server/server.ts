import express from 'express';
import mongoose from 'mongoose'

require('dotenv').config({ path: './local.env'});

const uri = process.env.DB_URI as string;

mongoose.connect(uri).then(() => console.log('MongoDB Connected Succesfully')).catch((error) => console.error('Error when connecting to MongoDB',error));

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000, click on http://localhost:3000')
})

