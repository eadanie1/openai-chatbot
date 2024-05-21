// class MessageParser {
//   constructor(actionProvider) {
//     this.actionProvider = actionProvider;
//   }

//   parse(message) {
//     this.actionProvider.handleMessage(message);
//   }
// }

// export default MessageParser;
import { validator } from "../utils/validator";

// function validator(message) {
//   const trimmedMessage = message.trim();

//   if (trimmedMessage.length < 3) {
//     this.actionProvider.handleInvalidInput(
//       "Input must be at least 3 characters long."
//     );
//   } else if (!/^[a-zA-Z]/.test(trimmedMessage)) {
//     this.actionProvider.handleInvalidInput("Input must start with a letter.");
//   } else {
//     this.actionProvider.handleValidInput(trimmedMessage);
//   }
// }

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    validator(message, this.actionProvider);
    // const trimmedMessage = message.trim();

    // if (trimmedMessage.length < 3) {
    //   this.actionProvider.handleInvalidInput(
    //     "Input must be at least 3 characters long."
    //   );
    // } else if (!/^[a-zA-Z]/.test(trimmedMessage)) {
    //   this.actionProvider.handleInvalidInput("Input must start with a letter.");
    // } else {
    //   this.actionProvider.handleValidInput(trimmedMessage);
    // }
  }
}

export default MessageParser;
