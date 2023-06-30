import styled from "styled-components";

export const InteractiveCompWrapper = styled.div`
  padding: 20px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .questionNum1 {
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      label {
        display: flex;
        flex-direction: column;
        color: ${(props) => props.theme.title};
        gap: 20px;
      }
      input {
        border: 2px solid white;
        border-radius: 4px;
        font-size: 18px;
        padding: 4px 10px;
        width: 280px;
      }
      button {
        border: 2px solid white;
        padding: 6px 10px;
        /* width: 280px;
        min-width: 220px; */
        font-size: 18px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        cursor: pointer;
        background-color: ${(props) => props.theme.title};
        color: ${(props) => props.theme.bgTitle};
      }
    }
    .results {
      text-align: center;
      font-size: 34px;
      padding: 30px;
      color: ${(props) => props.theme.title};
    }
    h2 {
      color: ${(props) => props.theme.title};
    }
    .seq {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      /* justify-content: center; */
      gap: 20px 10px;
      p {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        border-radius: 4px;
        /* border: 2px solid white; */
        background-color: rgba(0, 0, 0, 0.1);

        min-width: 60px;
      }
      p.even {
        background-color: aquamarine;
        color: #000;
      }
    }
  }
`;
