import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function search() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Find the exact address, phone number, and email for 'Laboratório de Arquitetura' in Portugal. It's an architecture studio. Please provide the exact address, phone, and email.",
    config: {
      tools: [{ googleSearch: {} }],
    },
  });
  console.log(response.text);
}

search();
