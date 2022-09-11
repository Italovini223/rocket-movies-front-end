import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > header {
    width: 100%;
    height: 144px;

    display: flex;
    align-items: center;

    padding: 0 144px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
  }
`; 

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;

  > div:nth-child(3) {
    margin-bottom: 24px;
  }


`;

export const Avatar = styled.div`
  width: 186px;
  height: 186px;

  position: relative;


  margin: -136px auto 64px;

  > img {
    width: 186px;
    height: 186px;

    border-radius: 50%;
  }
  
  > label {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    width: 48px;
    height: 48px;
    border-radius: 50%;

    background-color: ${({theme}) => theme.COLORS.SALMON};

    input {
      display: none;
    }
  }
`;

