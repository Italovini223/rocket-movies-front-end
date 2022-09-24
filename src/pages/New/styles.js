import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
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

  > h3 {
    font-weight: 400;
    font-size: 20px;

    color: ${({theme}) => theme.COLORS.GREY_400};

    margin: 40px 0 24px;
  }

  > .Tags {
    background-color: ${({theme}) => theme.COLORS.BLACK_900};
    height: 88px;
    
    margin-bottom: 40px;
    border-radius: 8px;
    padding: 16px;

    gap: 24px;
  }
`;