import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.whiteColor};
  padding: 7px 30px;
  font-weight: 600;
  font-size: ${props => props.theme.fontsizeLarge};
  border-radius: 2px;
  border: none;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    padding-left: 5px;
  }

  &:hover {
    background-color: ${props => props.theme.primaryDarkenColor};
  }
`;
