import { SetStateFunc, message } from "../types/types";

class ActionProvider {
  createChatBotMessage: typeof createChatBotMessage;
  setState: SetStateFunc;

  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleInvalidInput(message: message) {
    const errorMessage = this.createChatBotMessage(message);
    this.setState((prev) => ({
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
      const botMessage = this.createChatBotMessage(data.reply);

      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } catch (error) {
      console.error("Error fetching response from server:", error);
    }
  }
}

export default ActionProvider;
