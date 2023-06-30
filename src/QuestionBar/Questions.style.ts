import styled from "styled-components";

export const QuestionWrapper = styled.div`
  padding: 10px 0 20px;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.background};
  .questions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;
    .question {
      border: 2px solid white;
      padding: 6px 16px;
      min-width: 220px;
      font-size: 18px;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      cursor: pointer;
    }
    .question.selected {
      background-color: ${(props) => props.theme.title};
      color: ${(props) => props.theme.bgTitle};
    }
  }
  .the-question {
    min-height: 260px;
    margin: 30px 20px;
    display: flex;
    border: 2px solid white;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    border-radius: 12px;
    strong {
      font-weight: 600;
      text-align: left;
      /* margin: 30px 0 10px; */
      padding: 10px 20px 10px;
      font-size: 20px;
      color: ${(props) => props.theme.title};
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
