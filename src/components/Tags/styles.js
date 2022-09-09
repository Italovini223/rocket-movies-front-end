import styled from "styled-components";

export const Container = styled.div`
  padding: 8px 16px;
  border-radius: 8px;

  background-color: ${({theme}) => theme.COLORS.GREY_100};
  
  font-size: 12px;
  color: ${({theme}) => theme.COLORS.WHITE};
`;