// src/api/chatApi.js

export const sendMessageToAI = async (message) => {
  try {
    const response = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch AI response");
    }

    const data = await response.json();
    return data; // Expected: { reply: "AI ka jawab" }
  } catch (error) {
    console.error("Error in sendMessageToAI:", error);
    throw error;
  }
};
