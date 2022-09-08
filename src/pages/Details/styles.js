import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  max-width: 1137px;
  margin: 0 auto;
  padding: 50px 0;

  > div {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: ${({theme}) => theme.COLORS.WHITE};
    }
  }
  `;

  export const NewNote = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 8px;

   height: 48px;
   min-width: 207px;

   border-radius: 8px;
   border: none;

   background: ${({theme}) => theme.COLORS.SALMON};

   cursor: pointer;

   > svg {
      font-size: 16px;
   }
`;
 