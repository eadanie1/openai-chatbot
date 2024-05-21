import { useState, useEffect } from "react";
import { createChatBotMessage } from "react-chatbot-kit";

export const useChatbot = () => {
  const [messages, setMessages] = useState([
    createChatBotMessage("Hi! How can I help you?"),
  ]);

  const addMessage = (message: string) => {
    const botMessage = createChatBotMessage(message);
    setMessages((prevMessages) => [...prevMessages, botMessage]);
  };

  return { messages, addMessage };
};
