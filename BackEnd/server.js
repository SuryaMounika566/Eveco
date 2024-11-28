import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDb from './config/mongodb.js';

// App Config
const app = express();
const port = process.env.PORT || 4000;

// Connect to Database
connectDb();
connectCloudinary();

// Middleware
app.use(express.json());
app.use(cors());

// API Endpoints
app.get('/', (req, res) => {
    res.send("API Working");
});

// Start the Server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});