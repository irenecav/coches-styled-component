import styled from "styled-components";

export const StyledCarCard = styled.li`
  width: 300px;
  color: ${props => props.theme.fontColor};
  border: 1px ${props => props.theme.grayColor} solid;
  border-radius: 5px;

  h2 {
    font-size: ${props => props.theme.fontsizeRegular};
    text-align: left;
    margin: 20px 10px;
    font-weight: 600;
    span {
      font-weight: 200;
      margin-left: 5px;
    }
  }

  img {
    width: 300px;
  }
`;

export const StyledCarWrapperImage = styled.div`
  width: 300px;
  height: 200px;
  overflow: hidden;
`;

export const StyledCarWrapperPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  font-size: ${props => props.theme.fontsizeLarge};

  font-weight: 600;
`;
export const StyledCarWrapperkm = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  font-size: 1rem;
  font-weight: 200;
  .calendar {
    margin-right: 5px;
    vertical-align: middle;
  }
  p {
    display: inline-block;
  }
`;
