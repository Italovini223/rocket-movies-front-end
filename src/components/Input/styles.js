import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  padding: 0 12px;

  border-radius: 10px;
  margin-bottom: 8px;
  
  background-color: ${({theme}) => theme.COLORS.GREY_300};
  color: ${({theme}) => theme.COLORS.GREY_200};

  > input {
    width: 100%;
    height: 56px;

    padding: 16px;

    border: none;
    background: none;

    color: ${({theme}) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({theme}) => theme.COLORS.GREY_200};
    }

    &:focus {
      box-shadow: 0 0 0 0;
      outline: 0; 
    }
  }
`;