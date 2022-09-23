import styled from "styled-components";

export const Container = styled.div`
  background: ${({theme}) => theme.COLORS.GRAY_300};
  width: 100%;
   
   > textarea{
      background: none;
      color: ${({theme}) => theme.COLORS.WHITE};
      
      &::placeholder {
        color: ${({theme}) => theme.COLORS.GREY_200};
      }
   }
`;