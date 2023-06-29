import React from "react";
import { QuestionWrapper } from "./Questions.style";

const Questions = () => {
  const [questionNum, setQuestionNum] = React.useState(1);
  return (
    <QuestionWrapper>
      <div className="questions">
        <div
          className={questionNum === 1 ? "question selected" : "question"}
          onClick={() => setQuestionNum(1)}
        >
          1. Fibonacci numbers
        </div>
        <div
          className={questionNum === 2 ? "question selected" : "question"}
          onClick={() => setQuestionNum(2)}
        >
          2. Sorting Array
        </div>
        <div
          className={questionNum === 3 ? "question selected" : "question"}
          onClick={() => setQuestionNum(3)}
        >
          3. Integer Number Decimal
        </div>
        <div
          className={questionNum === 4 ? "question selected" : "question"}
          onClick={() => setQuestionNum(4)}
        >
          4. Digit return place value digit.
        </div>
      </div>
      <div className="the-question">
        {questionNum === 1 ? (
          <>
            <strong>Question 1.</strong>
            <div className="content">
              <p
                dangerouslySetInnerHTML={{
                  __html: `The Fibonacci sequence is defined as a sequence of integers starting with 1 and 1, where each
                subsequent value is the sum of the preceding two. I.e.
                f(n) = f(n-1) + f(n-2) where n >= 2
                `,
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: `
                f(0) = 1
            `,
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: `
                f(1) = 1
              `,
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: `
                f(n) = f(n-1) + f(n-2) where n >= 2
              `,
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: `
                Write a program in a language of your choice to calculate the sum of the first 100 even-valued
                Fibonacci numbers
              `,
                }}
              />
            </div>
          </>
        ) : null}

        {questionNum === 2 ? (
          <>
            <strong>Question 2.</strong>
            <div className="content">
              <p
                dangerouslySetInnerHTML={{
                  __html: `Write a function in a language of your choice which, when passed two sorted arrays of integers
                returns an array of any numbers which appear in both. No value should appear in the returned
                array more than once.`,
                }}
              />
            </div>
          </>
        ) : null}

        {questionNum === 3 ? (
          <>
            <strong>Question 3.</strong>
            <div className="content">
              <p
                dangerouslySetInnerHTML={{
                  __html: `Write a function in a language of your choice which, when passed a positive integer returns
                true if the decimal representation of that integer contains no odd digits and otherwise returns
                false.`,
                }}
              />
            </div>
          </>
        ) : null}

        {questionNum === 4 ? (
          <>
            <strong>Question 4.</strong>
            <div className="content">
              <p
                dangerouslySetInnerHTML={{
                  __html: `Write a function in a language of your choice which, when passed a decimal digit X, returns the
                value of X+XX+XXX+XXXX. E.g. if the supplied digit is 3 it should return 3702
                (3+33+333+3333).`,
                }}
              />
            </div>
          </>
        ) : null}
      </div>
    </QuestionWrapper>
  );
};

export default Questions;
