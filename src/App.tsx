import React from "react";
import "./App.css";
import Questions from "./QuestionBar/Questions";
import Navbar from "./Navbar/Navbar";
import Editor from "./Editor/Editor";

function App() {
  const [questionNumber, setQuestionNumber] = React.useState(1);
  return (
    <div className="App">
      <Navbar />
      <Questions questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} />
      <Editor questionNumber={questionNumber} />
    </div>
  );
}

export default App;
