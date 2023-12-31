import React, { FormEvent, SetStateAction, useState } from "react";
import { InteractiveCompWrapper } from "./InteractiveComp.style";
import { containEvenNum, fourDigitAddition, sumOfEvenFibNum } from "../data/answerFunctions";
type InteractiveCompProp = {
  questionNumber: number;
};
const InteractiveComp = ({ questionNumber }: InteractiveCompProp) => {
  const [inputsOne, setInputsOne] = useState("");
  const [inputsThree, setInputsThree] = useState("");
  const [inputsFour, setInputsFour] = useState("");
  const [resultsOne, setResultsOne] = useState();
  // sumOfEvenFibNum;
  // const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const enteredName = event.target.value;
  //   setResultsOne(event.target.value);
  // };
  // console.log("parseInt(inputsFour) :>> ", parseInt(inputsFour) === 4);
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
          {sumOfEvenFibNum(inputsOne).sum > 0 ? (
            <>
              {" "}
              <div className="results">
                <strong>Result:</strong> {sumOfEvenFibNum(inputsOne).sum}
              </div>{" "}
              <h2>The Sequence:</h2>
              <div className="seq">
                {sumOfEvenFibNum(inputsOne).sum > 0
                  ? sumOfEvenFibNum(inputsOne).seq.map((num) => (
                      <p className={num % 2 === 0 ? "even" : ""}>{num}</p>
                    ))
                  : null}
              </div>
            </>
          ) : null}
        </div>
      ) : null}
      {questionNumber === 3 ? (
        <div className="questionNum1">
          <form onSubmit={onSubmit}>
            <label htmlFor="resultsOne">Choose the positive integer number:</label>
            <div className="" style={{ display: "flex", gap: "10px" }}>
              <input
                type="number"
                placeholder="Enter a Number"
                onChange={(e) => setInputsThree(e.target.value)}
              />
              <button>submit</button>
            </div>
          </form>
          {parseInt(inputsThree) > 0 ? (
            <>
              {" "}
              <div className="results">
                <strong>Result:</strong>{" "}
                {containEvenNum(inputsThree) === true
                  ? "True"
                  : containEvenNum(inputsThree) === false
                  ? "False"
                  : null}
              </div>{" "}
              {/* <h2>The Sequence:</h2> */}
            </>
          ) : null}
        </div>
      ) : null}
      {questionNumber === 4 ? (
        <div className="questionNum1">
          <form onSubmit={onSubmit}>
            <label htmlFor="resultsOne">Choose the positive integer number:</label>
            <div className="" style={{ display: "flex", gap: "10px" }}>
              <input
                type="number"
                placeholder="Enter a Number"
                onChange={(e) => setInputsFour(e.target.value)}
              />
              <button>submit</button>
            </div>
          </form>
          {inputsFour.length > 0 ? (
            <>
              {" "}
              <div className="results">
                {parseInt(inputsFour) >= 0 && parseInt(inputsFour) < 10 ? (
                  <strong>Result:</strong>
                ) : null}{" "}
                {parseInt(inputsFour) > 9
                  ? "Please only enter one digit!"
                  : parseInt(inputsFour) >= 0
                  ? fourDigitAddition(inputsFour)
                  : parseInt(inputsFour) < 0
                  ? "Please only enter positive digit!"
                  : null}
              </div>{" "}
              {/* <h2>The Sequence:</h2> */}
            </>
          ) : null}
        </div>
      ) : null}
    </InteractiveCompWrapper>
  );
};

export default InteractiveComp;
