import styled from "styled-components";

export const AppWrapper = styled.div`
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.background};

  .App {
    max-width: 1240px;
    margin: auto;
    min-height: 100vh;
    width: 95%;
    font-size: 16px;
    color: white;
  }
`;
