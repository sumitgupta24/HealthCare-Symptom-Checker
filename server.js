import express from "express";
import dotenv from "dotenv";
import { CohereClient } from "cohere-ai"; 

dotenv.config();

const app = express();
app.use(express.json());

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

app.post("/api/v1/symptoms", async (req, res) => {
  const { symptoms, age, sex } = req.body;

  const input_prompt = `
You are an educational healthcare assistant.
Do not provide medical advice or diagnosis.
Always include an educational disclaimer.

Symptoms: ${symptoms}
Age: ${age ?? "unknown"}
Sex: ${sex ?? "unknown"}

Respond in valid JSON:
{
  "summary": "...",
  "probable_conditions": [{ "name": "...", "confidence": 0.4, "rationale": "..." }],
  "recommended_next_steps": ["..."],
  "disclaimer": "Educational only — not a diagnosis."
}
`;

  try {
    const response = await cohere.chat({
      model: "command-a-03-2025",

      message: input_prompt
    });
    let responseText = response.text;

    responseText = responseText.replace(/```json|```/g, "").trim();

    let responseJSON;
    try {
      responseJSON = JSON.parse(responseText);
    } catch (parseError) {
      console.error("Failed to parse JSON:", parseError);
      return res.send(responseText);
    }

    res.json(responseJSON);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to get Cohere response" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
