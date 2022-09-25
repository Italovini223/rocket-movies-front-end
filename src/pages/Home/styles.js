import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px  auto;
  grid-template-areas:
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;
  }

`;


export const Content = styled.div`
  max-width: 1137px;
  height: 100vh;
  margin: 0 auto;
  padding: 50px ;

  display: flex;
  flex-direction: column;

  .head {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 53px;

    h1 {
      color: ${({theme}) => theme.COLORS.WHITE};
    }
  }

`;

  export const NewNote = styled(Link)`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 8px;

   text-decoration: none;
  

   height: 48px;
   min-width: 207px;

   border-radius: 8px;
   border: none;

   background: ${({theme}) => theme.COLORS.SALMON};
   color: ${({theme}) => theme.COLORS.BLACK_800};

   cursor: pointer;

   > svg {
      font-size: 16px;
   }
`;

 