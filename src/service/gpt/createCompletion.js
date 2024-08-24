import OpenAI from 'openai';
import * as dotenv from 'dotenv';
dotenv.config();

const OPEN_AI_TOKEN = process.env.OPENAI_API_KEY || '';

const openai = new OpenAI({
    apiKey: OPEN_AI_TOKEN, 
});

const modelName = "gpt-4o"; // Correct model name

export const createCompletion = async (prompt) => {
    try {
        const response = await openai.chat.completions.create({
            model: modelName,
            temperature: 0.7,
            messages: [{ role: 'user', content: prompt }],
        });
        return response.choices[0].message;
    } catch (error) {
        console.error("Error creating completion:", error.response?.data || error.message);
        return null;
    }
};


