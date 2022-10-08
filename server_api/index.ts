import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import api from "./api";
const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());
app.use("/", api);

export default app;
