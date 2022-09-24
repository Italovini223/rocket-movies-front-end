import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  height: 56px;
  padding: 16px;



  border-radius: 10px;

  border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GREY_200}`: "none"};

  background-color: ${({theme, isNew}) => !isNew ? theme.COLORS.GREY_300 : theme.COLORS.BLACK_900};

  > input {
    width: 100%;
    height: 29px;

    color: ${({theme}) => theme.COLORS.WHITE};
    background: transparent;
    border: none;
    

    &::placeholder {
      color: ${({theme}) => theme.COLORS.GREY_200};
    }

    &:focus {
      box-shadow: 0 0 0 0;
      outline: 0;
    }

  }

  > button {
    background: transparent;
    border: none;

    svg {
      color: ${({theme}) => theme.COLORS.SALMON};
      font-size: 24px;
    }
  }

  
`;