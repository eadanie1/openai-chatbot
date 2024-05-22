import { createChatBotMessage } from "react-chatbot-kit";
import { SetStateAction, Dispatch } from "react";
import { message, ChatbotState } from "../types/types";

type BotMessage = ReturnType<typeof createChatBotMessage>;

class ActionProvider {
  private createChatBotMessage;
  private setState: Dispatch<SetStateAction<any>>;

  constructor(
    createChatBotMessage,
    setStateFunc: Dispatch<SetStateAction<any>>
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleInvalidInput(message: message) {
    const errorMessage: BotMessage = this.createChatBotMessage(message);
    this.setState((prev: ChatbotState) => ({
      ...prev,
      messages: [...prev.messages, errorMessage],
    }));
  }

  async handleValidInput(message: message) {
    try {
      const response = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      const botMessage: BotMessage = this.createChatBotMessage(data.reply);

      this.setState((prev: ChatbotState) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } catch (error) {
      console.error("Error fetching response from server:", error);
    }
  }
}

export default ActionProvider;
