import { GoogleGenAI } from "@google/genai";

async function run() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3.1-pro-preview",
    contents: "Find the exact address, phone number, and email of the architecture studio 'Laboratório de Arquitetura' in Portugal. It is on Google Maps. Return the details clearly.",
    config: {
      tools: [{ googleSearch: {} }],
    },
  });
  console.log(response.text);
}
run();
