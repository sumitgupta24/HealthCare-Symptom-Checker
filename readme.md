Educational Healthcare Assistant API

Description:
This Express.js server uses Cohere’s Command-A model to generate educational insights about symptoms provided by a user.

Disclaimer: This tool does NOT provide medical advice or diagnosis. It is for educational purposes only.

Setup Instructions:

Clone or download the project:
git clone <your-repo-url>
cd <project-directory>

Install dependencies:
npm install express dotenv cohere-ai

Get an API key:

Sign up at Cohere (https://cohere.ai/
)

Obtain your Cohere API Key from the dashboard

Create a .env file in the project root:
COHERE_API_KEY="your_cohere_api_key_here"

Running the Server:

node server.js

The server will run on port 3000 by default.

API Endpoint:

POST /api/v1/symptoms

Request Body (JSON):
{
"symptoms": "fever, sore throat, fatigue",
"age": 25,
"sex": "female"
}

Response (JSON):
{
"summary": "The symptoms indicate a likely viral infection, such as a common cold or mild flu.",
"probable_conditions": [
{
"name": "Common Cold",
"confidence": 0.7,
"rationale": "Fever, sore throat, and fatigue are common symptoms of a cold."
},
{
"name": "Influenza (Flu)",
"confidence": 0.3,
"rationale": "Mild fever and fatigue could indicate early-stage flu."
}
],
"recommended_next_steps": [
"Rest and stay hydrated.",
"Monitor temperature and symptoms.",
"Consult a healthcare provider if symptoms worsen."
],
"disclaimer": "Educational only — not a diagnosis."
}