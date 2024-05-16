import OpenAI from "openai";
import dotenv from 'dotenv';
import express from 'express';
import axios from "axios";
import cors from 'cors';
import { tryCatch } from "./global-logic/tryCatch.js";
const app = express();
dotenv.config();
app.use(express.json(), cors());

const openai = new OpenAI();

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a Scottish fisherman." }],
    model: "gpt-3.5-turbo",
  });

  // console.log(completion.choices[0]);
  console.log(completion.choices[0].message.content);
}

main();

app.post(
  '/chat',
  tryCatch(async (req, res) => {

  })
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});