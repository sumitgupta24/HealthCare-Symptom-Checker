
#  Educational Healthcare Assistant API  

Description: 
This Express.js server uses Cohere’s Command-R model to generate educational and informative insights based on user-provided symptoms.  

>  Disclaimer: This tool does not provide medical advice or diagnosis. It is intended for educational purposes only. Always consult a qualified healthcare professional for medical concerns.  

---

##  Setup Instructions  

1. Clone or Download the Project
   bash
   git clone <your-repo-url>
   cd <project-directory>

2. Install Dependencies

   bash
   npm install express dotenv cohere-ai
   

3. Get a Cohere API Key

   * Sign up at [Cohere](https://cohere.ai/)
   * Obtain your API key from the Cohere Dashboard

4. Configure Environment Variables
   Create a `.env` file in your project root and add:
   COHERE_API_KEY="your_cohere_api_key_here"

##  Running the Server
node server.js

By default, the server runs at [http://localhost:3000](http://localhost:3000)

##  API Endpoint

### POST `/api/v1/symptoms`

#### Request Body (JSON)
{
  "symptoms": "fever, sore throat, fatigue",
  "age": 25,
  "sex": "female"
}

####  Example Response (JSON)
{
  "summary": "These symptoms may indicate a mild viral infection, such as the common cold or early flu.",
  "probable_conditions": [
    {
      "name": "Common Cold",
      "confidence": 0.65,
      "rationale": "Fever, sore throat, and fatigue are typical symptoms of the common cold."
    },
    {
      "name": "Influenza (Flu)",
      "confidence": 0.35,
      "rationale": "Fatigue and fever can also suggest early-stage flu."
    }
  ],
  "recommended_next_steps": [
    "Get adequate rest and stay hydrated.",
    "Monitor symptoms over the next 48 hours.",
    "Consult a doctor if symptoms worsen or persist."
  ],
  "disclaimer": "This response is for educational purposes only and does not substitute professional medical advice."
}
## Key Features

* Generates educational health summaries based on user symptoms
* Suggests possible conditions (non-diagnostic)
* Offers general wellness recommendations
* Built with Node.js, Express.js, and Cohere AI

  
###  License

This project is released under the MIT License.


---

Would you like me to add a **small “Usage Example” section** with a `curl` or `Postman` example call too (so others can test your API easily)?
```
