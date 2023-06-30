import React, { FormEvent, SetStateAction, useState } from "react";
import { InteractiveCompWrapper } from "./InteractiveComp.style";
import { sumOfEvenFibNum } from "../data/answerFunctions";
type InteractiveCompProp = {
  questionNumber: number;
};
const InteractiveComp = ({ questionNumber }: InteractiveCompProp) => {
  const [inputsOne, setInputsOne] = useState("");
  const [resultsOne, setResultsOne] = useState();
  // sumOfEvenFibNum;
  // const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const enteredName = event.target.value;
  //   setResultsOne(event.target.value);
  // };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setResultsOne();
  };
  // console.log("sumOfEvenFibNum(inputsOne) :>> ", sumOfEvenFibNum(inputsOne));
  return (
    <InteractiveCompWrapper>
      {questionNumber === 1 ? (
        <div className="questionNum1">
          <form onSubmit={onSubmit}>
            <label htmlFor="resultsOne">
              Choose the number of even numbers in the sequence to add:
            </label>
            <div className="" style={{ display: "flex", gap: "10px" }}>
              <input
                type="number"
                placeholder="Enter a Number"
                onChange={(e) => setInputsOne(e.target.value)}
              />
              <button>submit</button>
            </div>
          </form>
          <div className="results">
            <strong>Result:</strong> {sumOfEvenFibNum(inputsOne).sum}
          </div>
          <h2>The Sequence:</h2>
          <div className="seq">
            {sumOfEvenFibNum(inputsOne).seq.map((num) => (
              <p className={num % 2 === 0 ? "even" : ""}>{num}</p>
            ))}
          </div>
        </div>
      ) : null}
    </InteractiveCompWrapper>
  );
};

export default InteractiveComp;
