import { validator } from "../utils/validator";

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    validator(message, this.actionProvider);
  }
}

export default MessageParser;
