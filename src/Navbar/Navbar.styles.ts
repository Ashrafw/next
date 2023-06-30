import styled from "styled-components";

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid white;
  margin-bottom: 30px;
  padding: 20px 10px 10px;
  color: ${(props) => props.theme.color};
  /* background-color: ${(props) => props.theme.background}; */
  .logo {
    font-size: 2rem;
    font-weight: 700;
  }
  .mode {
    font-size: 22px;
    cursor: pointer;
    border: 2px solid white;
    /* padding: 4px; */
    border-radius: 100px;
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
