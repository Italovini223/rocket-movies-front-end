import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > header {
    width: 100%;
    height: 144px;

    display: flex;
    align-items: center;

    padding: 0 144px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
  }
`; 

export const Form = styled.form`
  
`;

