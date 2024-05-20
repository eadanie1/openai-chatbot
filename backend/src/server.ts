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

app.post(
  '/chat',
  tryCatch(async (req, res) => {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: "Message is required" });
    
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a Scottish fisherman." },
      { role: "user", content: message }],
      model: "gpt-3.5-turbo",
    });
    const reply = completion.choices[0].message.content;
    if (!reply) return res.status(500).json({ error: "Failed to generate a reply from OpenAI" });

    // console.log(reply);
    res.json({ reply });
  })
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});