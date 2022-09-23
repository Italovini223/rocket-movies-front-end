import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh
`;

export const Content = styled.div`
  max-width: 1137px;
  margin: 40px auto;

  > h1 {
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: 36px;
    margin: 24px 0 40px;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 40px;
  }
`;