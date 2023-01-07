import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";
import env from "dotenv";

env.config();

const prisma = new PrismaClient();
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

// comments section

app.post("/comments", async (req, res) => {
  const { missionId, content } = req.body;
  const newComment = await prisma.comment.create({
    data: {
    content,
      missionId: Number(missionId),
      
    },
  });
  res.send(newComment);
});

app.get("/comments", async (req, res) => {
  const comments = await prisma.comment.findMany();
  res.send(comments);
});

app.get("/comments/:missionId", (req, res) => {
  const missionId = Number(req.params.missionId);
  const comments = prisma.comment.findMany({
    where: {
      missionId,
    },
  });
  res.send(comments);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
