// import { createChatBotMessage } from "react-chatbot-kit";

// const config = {
//   initialMessages: [createChatBotMessage("Hi there! How can I be of service?")],
//   botName: "SteveBot",
// };

// export default config;

import { createChatBotMessage } from "react-chatbot-kit";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

const config = {
  botName: "SteveBot",
  initialMessages: [createChatBotMessage("Hi there! How can I be of service?")],
  customComponents: {},
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  state: {},
  widgets: [],
  messageParser: (message) => new MessageParser(message),
  actionProvider: (setState) =>
    new ActionProvider(createChatBotMessage, setState),
};

export default config;
