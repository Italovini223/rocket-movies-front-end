import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > header {
    width: 100%;
    height: 144px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
  }
`; 