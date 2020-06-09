import styled from "styled-components";
import Modal from "react-modal";

export const StyledModalContainer = styled(Modal)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  font-size: ${props => props.theme.fontsizeRegular};
  font-family: ${props => props.theme.familyFont};
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    background-color: ${props => props.theme.whiteColor};
    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      align-self: flex-start;
      padding: 0 40px;
      margin: 20px 0;
      font-weight: 600;
      span {
        font-weight: 300;
        margin-left: 5px;
      }
    }
    img {
      width: 300px;
      margin-bottom: 60px;
    }

    svg {
      align-self: flex-end;
      margin: 10px;
    }
  }
`;
