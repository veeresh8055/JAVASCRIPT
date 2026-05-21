import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function generateCaption(base64ImageFile) {
  const contents = [
    {
      inlineData: {
        mimeType: "image/jpeg",
        data: base64ImageFile,
      },
    },
    { text: "Caption this image." },
  ];

  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: contents,
    config:{
      systemInstruction:`Generate a catchy social media caption for the uploaded image.

Requirements:
- Caption length must be between 15 and 20 words.
- Use engaging and natural language.
- Include 2–4 relevant emojis.
- Add 3–5 trending and relevant hashtags at the end.
- Make it suitable for both Twitter/X and Instagram.
- Tone should be modern, energetic, and attention-grabbing.
- Avoid generic captions and repetition.
- Match the caption to the mood, colors, and subject of the image.

Output only the caption. `
    }
  });
  return  response.text
}

export default generateCaption ;
