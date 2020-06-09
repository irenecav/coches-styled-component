import styled from "styled-components";


export const SearchContainer = styled.div`
  position: absolute;
  top: 160px;
  display: flex;
  overflow: hidden;
  background-color: #fff;
  width: 100%;
  border-radius: 0;
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media only screen and (min-width: ${props => props.theme.tablet}) {
    position: relative;
    max-width: 484px;
    top: unset;
    width: auto;
    margin: 0 auto;
    border-radius: 5px;
  }

  input {
    margin: 3px;
    flex: 1;
    border-color: #dbdbdb;
  }

  svg {
    padding-left: 0;
  }

  button {
    border-radius: 0;

    @media only screen and (min-width: ${props => props.theme.tablet}) {
      border-radius: 0 5px 5px 0;
      padding: 5px;
    }
  }
`;
