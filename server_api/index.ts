import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import api from "./api";
const app = express();

dotenv.config();

const corsOptions = {
    origin: 'http://localhost:3000/api/',
    allowedHeaders: 'http://localhost:3000/'
}

app.use(express.json());
app.use(cors(corsOptions));
app.use("/", api);

export default app;
