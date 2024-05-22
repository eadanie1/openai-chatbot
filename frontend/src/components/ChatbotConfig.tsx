import { createChatBotMessage } from "react-chatbot-kit";
import ChatBotMessage from "react-chatbot-kit";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import { SetStateAction, Dispatch } from "react";
import { message, ChatbotState } from "../types/types";

const config: typeof ChatBotMessage = {
  botName: "SteveBot",
  initialMessages: [
    createChatBotMessage("Hi there! How can I be of service?", {
      loading: true,
    }),
  ],
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
  messageParser: (message: message, state: ChatbotState) =>
    new MessageParser(message, state),
  actionProvider: (setState: Dispatch<SetStateAction<any>>) =>
    new ActionProvider(createChatBotMessage, setState),
};

export default config;
