import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./ChatbotConfig";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

const OpenAIChatbot = () => {
  return (
    <>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </>
  );
};

export default OpenAIChatbot;
