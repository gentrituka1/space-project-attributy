import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";
import env from "dotenv"

env.config();

const prisma = new PrismaClient();
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get("/comments/:id", (req, res) => {
    const { id } = req.params;
    const comment = 
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});