import styled from "styled-components";

export const QuestionWrapper = styled.div`
  padding: 10px 0 20px;
  .questions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .question {
      border: 2px solid white;
      padding: 6px 16px;
      min-width: 220px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      cursor: pointer;
    }
    .question.selected {
      background-color: aquamarine;
      color: rgb(34, 34, 34);
    }
  }
  .the-question {
    min-height: 260px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
    strong {
      font-weight: 600;
      text-align: left;
      /* margin: 30px 0 10px; */
      padding: 40px 20px 10px;
      font-size: 20px;
      color: aquamarine;
    }
    .content {
      padding: 0 20px;
      p {
        /* padding: 10px 20px 10px; */
        font-size: 18px;
        font-family: "Montserrat", sans-serif;
        margin-bottom: 6px;
      }
    }
  }
`;
