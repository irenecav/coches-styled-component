import styled from "styled-components";
import image from "../../assets/images/hero-new.jpg";

export const StyledHeader = styled.header`
  background-color: ${props => props.theme.secondaryColor};
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: center;
  color: ${props => props.theme.whiteColor};
  width: 100%;
  margin: 0 auto;
  padding: 60px 0;
  text-align: center;
  h1 {
    font-size: ${props => props.theme.fontsizeLarge};
    font-family: ${props => props.theme.familyFont};
    line-height: initial;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.19);
    -webkit-text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.19);
    -moz-text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.19);
    @media only screen and (min-width: ${props => props.theme.tablet}) {
      margin-bottom: 60px;
    }
  }

  form {
    vertical-align: middle;
    input {
      height: 30px;
    }
  }

  @media only screen and (min-width: ${props => props.theme.tablet}) {
    padding: 120px 0;
  }
`;
