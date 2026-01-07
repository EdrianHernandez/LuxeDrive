
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getCarRecommendation = async (userPreference: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User wants a car recommendation based on this preference: "${userPreference}". Suggest a car from the luxury/sport/supercar categories.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            carName: { type: Type.STRING },
            reasoning: { type: Type.STRING },
            styleMatch: { type: Type.STRING }
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
