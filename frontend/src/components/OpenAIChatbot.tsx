import { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./ChatbotConfig";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import styles from "../styles/chatbotStyles.module.css";

const OpenAIChatbot = () => {
  const [isMinimized, setIsMinimized] = useState<boolean>(true);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };
  return (
    <div>
      {!isMinimized && (
        <div className={styles.chatWindow}>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
          <button onClick={toggleMinimize} className={styles.minimizeButton}>
            _
          </button>
        </div>
      )}
      {isMinimized && (
        <button onClick={toggleMinimize} className={styles.openChatButton}>
          <span className="sr-only"></span>
        </button>
      )}
    </div>
  );
};

export default OpenAIChatbot;
