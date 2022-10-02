import express from 'express';
import api from './api'
import cors from 'cors';
import dotenv from 'dotenv';
const app = express();

dotenv.config();

app.use(express.json());
app.use(cors())
app.use('/', api)

export default app;