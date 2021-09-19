import "./App.css";
import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import Previewer from "./Previewer";
import { placeholder } from "./placeholder";
import marked from "marked";

const App = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    setText(placeholder);
  }, []);

  return (
    <>
      <Editor handleChange={handleChange} placeholder={text} />
      <Previewer markdown={marked(text)} />
    </>
  );
};

export default App;
