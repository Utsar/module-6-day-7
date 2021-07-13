import express, { response } from "express";
import listEndpoints from "express-list-endpoints";
import cors from "cors";

const server = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());
