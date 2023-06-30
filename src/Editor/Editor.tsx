import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { code1 } from "../data/data";
import { code2 } from "../data/data";
import { code3 } from "../data/data";
import { code4 } from "../data/data";
const code = `
package main
import "fmt"
func main() {
  fmt.Println("Hello, 世界")
}
`;
type EditorProps = {
  questionNumber: number;
};
const Editor = ({ questionNumber }: EditorProps) => {
  const handleQuestionChange = () => {
    if (questionNumber === 1) return code1;
    if (questionNumber === 2) return code2;
    if (questionNumber === 3) return code3;
    if (questionNumber === 4) return code4;
  };
  return (
    <div className="">
      <CodeMirror
        value={handleQuestionChange()}
        // value="console.log('hello world!');"
        // height="200px"
        extensions={[javascript({ jsx: true })]}
        theme={oneDark}
      />
    </div>
  );
};

export default Editor;
