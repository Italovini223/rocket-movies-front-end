import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 48px;

  border: none;
  background-color: ${({theme, Deleted}) => !Deleted ? theme.COLORS.SALMON : theme.COLORS.BACKGROUND_900};

  border-radius: 10px; 

  font-size: 16px;
  font-weight: 500;
  color: ${({theme, Deleted}) => !Deleted ? theme.COLORS.GREY_100 : theme.COLORS.SALMON};
  
  &:disabled {
    opacity: 0.5;
  }
`;