import styled from "styled-components";
import backgroundImg from '../../assets/Background.png'
 
export const Container = styled.div`
  width: 100;
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;


  text-align: center;

  margin: 0 136px;

  > h1 {
    font-size: 48px;
    font-weight: 700;

    color: ${({theme}) => theme.COLORS.SALMON};
  }

  > span {
    font-size: 14px;
    font-weight: 400;

    color: ${({theme}) => theme.COLORS.WHITE};

    margin-bottom: 48px;

  }

  > h2 {
    font-size: 24px;
    font-weight: 500;

    color: ${({theme}) => theme.COLORS.WHITE};

    margin-bottom: 48px;
    
  }

  > button {
    margin: 16px auto;
  }

`;


export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;