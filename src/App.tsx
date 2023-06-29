import React from "react";
import "./App.css";
import Questions from "./QuestionBar/Questions";
import Navbar from "./Navbar/Navbar";
import Editor from "./Editor/Editor";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Questions />
      <Editor />
    </div>
  );
}

export default App;
