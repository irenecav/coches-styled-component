import styled from "styled-components";

export const StyledShowcaseDiv = styled.div`
  margin: 80px auto;
  text-align: center;
  font-family: ${props => props.theme.familyFont};
  h3 {
    font-size: ${props => props.theme.fontsizeMedium};
    color: ${props => props.theme.secondaryColor};
    font-weight: 600;
    margin: 0 5px 5px 5px;
    line-height: initial;
    @media only screen and (min-width: ${props => props.theme.tablet}) {
      margin-bottom: 20px;
    }
    span {
      font-weight: 200;
    }
  }
  ul {
    list-style: none;
    margin-bottom: 65px;
    li {
      display: inline-block;
      margin: 20px 5px;
      @media only screen and (min-width: ${props => props.theme.tablet}) {
        margin: 20px;
      }
    }
  }
`;
