import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getCarRecommendation = async (userPreference) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User wants a car recommendation based on this preference: "${userPreference}". Suggest a car from the luxury/sport/supercar categories.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "object",
          properties: {
            carName: { type: "string" },
            reasoning: { type: "string" },
            styleMatch: { type: "string" }
          },
          required: ["carName", "reasoning", "styleMatch"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini API Error:", error);
    return null;
  }
};
