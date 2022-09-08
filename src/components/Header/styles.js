import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 116px;

  display: flex;
  align-items: center;

  padding: 0 123px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_800};


 > span {
    color: ${({theme}) => theme.COLORS.SALMON};

    font-size: 24px;
    font-weight: 700;

    margin-right: 64px;
 }

`;

export const Profile = styled.div`
  min-width: 198px;
  display: flex;
  align-items: center;

  margin-left: 64px;


  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;


    margin-right: 9px;

    strong {
      color: ${({theme}) => theme.COLORS.WHITE};
   }

    button {
      border: none;
      background: none;
      
      color: ${({theme}) => theme.COLORS.GREY_200};

      &:hover {
        cursor: pointer;
      }
   }


  }
  
  > img {
    width: 64px;
    height: 64px;

    border-radius: 50%;
  }
`;

