import { useState } from "react";
import "./App.css";
import OpenAIChatbot from "./components/OpenAIChatbot";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <OpenAIChatbot />
    </>
  );
}

export default App;
