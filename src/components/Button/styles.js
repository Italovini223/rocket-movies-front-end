import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 48px;

  border: none;
  background-color: ${({theme}) => theme.COLORS.SALMON};

  border-radius: 10px; 

  font-size: 16px;
  font-weight: 500;
  color: ${({theme}) => theme.COLORS.GREY_100};
  
  &:disabled {
    opacity: 0.5;
  }
`;