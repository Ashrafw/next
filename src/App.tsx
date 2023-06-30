import React from "react";
import "./App.css";
import Questions from "./QuestionBar/Questions";
import Navbar from "./Navbar/Navbar";
import Editor from "./Editor/Editor";
import { ThemeProvider } from "styled-components";
import { color } from "@codemirror/theme-one-dark";
import { AppWrapper } from "./App.styles";

const darkTheme = {
  background: "#282c34",
  color: "white",
  title: "aquamarine",
  bgTitle: "#282c34",
};
const lightTheme = {
  background: "#b9cccd",
  color: "#282c34",
  title: "#282c34",
  bgTitle: "white",
  titleColor: "white",
};
function App() {
  const [questionNumber, setQuestionNumber] = React.useState(1);
  const [nightMode, setNightMode] = React.useState(true);
  return (
    <ThemeProvider theme={nightMode ? darkTheme : lightTheme}>
      <AppWrapper>
        <div className="App">
          <Navbar setNightMode={setNightMode} nightMode={nightMode} />
          <Questions questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} />
          <Editor questionNumber={questionNumber} />
        </div>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
