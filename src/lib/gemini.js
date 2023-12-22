
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getToken } from "./utils";

// Access your API key as an environment variable
const apiKey = getToken();
const genAI = new GoogleGenerativeAI(apiKey);

class ChatSession {
  constructor(userHistory = [], maxOutputTokens = 1000) {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    this.chat = model.startChat({
      history: userHistory, // Optional: Previous messages in the conversation  
      generationConfig: {
        maxOutputTokens,
      },
    });
  }

  sendMessage(msg) {
    return new Promise((resolve, reject) => {
      this.chat.sendMessage(msg)
        .then(result => {
          resolve(result);
        })
        .catch(() => {
          reject();
        });
    });
  }

}

export default ChatSession;