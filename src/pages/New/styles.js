import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto; 
  grid-template-areas:
  "header"
  "content";
`;

export const Content = styled.div`
  width: 50%;
  margin: 40px auto;

  grid-area: content;
  overflow-y: auto;

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

  .buttons {

  }

  > .Tags {
    display: flex;
    flex-wrap: wrap;

    background-color: ${({theme}) => theme.COLORS.BLACK_900};
    
    margin-bottom: 40px;
    border-radius: 8px;
    padding: 16px;

    gap: 8px;
  }

  ::-webkit-scrollbar {
    background: none;

  }

  ::-webkit-scrollbar-track {
    background-color: ${({theme}) => theme.COLORS.SALMON};

    border-radius: 1129px;
    margin-block-end: 600px;

  }
`;