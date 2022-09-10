import styled from "styled-components";

export const Container = styled.button`

  display: flex;
  align-items: center;
  
  border: none;
  background: none;

  color: ${({theme}) => theme.COLORS.SALMON};

  > span {
    font-size: 16px;
    font-weight: 400;

    color: ${({theme}) => theme.COLORS.SALMON};
  }

  > svg {
    color: ${({theme}) => theme.COLORS.SALMON};
  }
`;