import OpenAI from "openai";
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { tryCatch } from "./global-logic/tryCatch.js";
import { error, reply, request, response } from "./types/types";
const app = express();
dotenv.config();
app.use(express.json(), cors());

const openai = new OpenAI();

app.post(
  '/chat',
  tryCatch(async (req: express.Request<{}, {}, request>, res: express.Response<response | error | reply>): Promise<void> => {
    const { message }: { message: string } = req.body;
    if (!message) {
      res.status(400).json({ error: "Message is required" });
      return;
    }
    
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a Scottish comedian." },
      { role: "user", content: message }],
      model: "gpt-3.5-turbo",
    });
    let reply: response | null = completion.choices[0]?.message?.content;
    if (!reply) {
      res.status(500).json({ error: "Failed to generate a reply from OpenAI" });
      return;
    }

    reply = reply as string;
    res.json({ reply });
  })
);

const port: number = parseInt(process.env.PORT || '3000', 10);
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});