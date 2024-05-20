import axios from "axios";
// import { useContext, useEffect, useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./ChatbotConfig";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

const OpenAIChatbot = () => {
  // const [chat, setChat] = useState(null);

  // useEffect(() => {
  //   axios
  //     .post("http://localhost:3000/chat")
  //     .then((res) => {
  //       setChat(res.data);
  //       console.log(res.data);
  //       console.log(res.status);
  //     })
  //     .catch((error) => {
  //       console.error("Error: ", error);
  //     });
  // }, []);
  return (
    <>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
      {/* <div>{chat}</div> */}
    </>
  );
};

export default OpenAIChatbot;
