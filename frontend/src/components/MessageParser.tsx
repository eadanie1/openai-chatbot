import { validator } from "../utils/validator";
import { ChatbotState, message } from "../types/types";

class MessageParser {
  private actionProvider: any;
  private state: ChatbotState;

  constructor(actionProvider: any, state: ChatbotState) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message: message) {
    validator(message, this.actionProvider);
  }
}

export default MessageParser;
