import styled from "styled-components";

export const Container = styled.button`
  width: 100%;

  display: flex;
  flex-direction: column;
  
 

  padding: 32px;
  margin-bottom: 24px; 
  border-radius: 16px;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

  border: none;

  &:hover{
    cursor: pointer;
  }

  > h2 {
    width: 100%;
    margin-bottom: 15px;
    font-size: 24px;
    font-weight: 700;
    text-align: left;

    color: ${({theme}) => theme.COLORS.WHITE};
  }

  p {
    width: 100%;
    margin-bottom: 15px;

    font-size: 16px;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.GREY_400};

    text-align: justify;
  }

  > footer {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 8px;
  }
`;