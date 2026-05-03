import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";

dotenv.config();

const app = express();
const port = 3000;

// ✅ Use working model
const model = "gemini-3-flash-preview";

// ✅ API key
const apiKey = process.env.GEMINI_API_KEY?.trim();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Serve index.html
app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/chat", async (req, res) => {
  try {
    const message = req.body.message?.trim();

    if (!apiKey) {
      return res.json({ reply: "Missing API key" });
    }

    if (!message) {
      return res.json({ reply: "Enter a message" });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: message }]
            }
          ]
        })
      }
    );

    // ✅ SAFE parsing (no crash)
    const rawText = await response.text();
    console.log("RAW:", rawText);

    let data;
    try {
      data = JSON.parse(rawText);
    } catch {
      return res.json({ reply: "Invalid response from AI" });
    }

    if (!response.ok) {
      return res.json({
        reply: data.error?.message || "API Error"
      });
    }

    const reply =
      data.candidates?.[0]?.content?.parts
        ?.map(p => p.text)
        .join(" ")
        .trim() || "No response";

    res.json({ reply });

  } catch (err) {
    console.error("SERVER ERROR:", err);
    res.json({ reply: "Server error" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});