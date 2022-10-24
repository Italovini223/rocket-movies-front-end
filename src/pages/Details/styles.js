import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  max-width: 50%;

  margin: 0 auto;

  margin-top: 40px;

  span {
    font-family:'Roboto', sans-serif;
    font-weight: 400;
    line-height: 18px;
    

  }

  > .movie-info {
    display: flex;
    align-items: center;
    gap: 19px;

    margin: 24px 0;

    h1 {
      color: ${({theme}) => theme.COLORS.WHITE};
    }

  }

  > .note-info {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-bottom: 40px;
    
   .created-by {
    display: flex;
    align-items: center;
    gap: 8px;


    img {
      width: 16px;
      height: 16px;
      border-radius: 50%;
    }

    span {
      color: ${({theme}) => theme.COLORS.WHITE};
    }

   }

   .created-at {
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      color: ${({theme}) => theme.COLORS.SALMON};
    }

    span {
      color: ${({theme}) => theme.COLORS.WHITE};
    }
   }
  }

  > P {
    width: 100%;

    text-align: justify;

    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    color: ${({theme}) => theme.COLORS.WHITE};
  }

  > .tags {
    display: flex;
    align-items: center;
    gap: 8px;

    margin-bottom: 40px;
  }
`;

export const Headers = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  > button {
    background: none;
    border: none;

    display: flex;
    align-items: center;
    gap: 8px;


    font-weight: 400;
    font-size: 16px;

    color: ${({theme}) => theme.COLORS.SALMON};

  }
`;