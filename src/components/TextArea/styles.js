import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 274px;

  background-color: ${({theme}) => theme.COLORS.GREY_300};

  border: none;
  resize: none;

  border-radius: 10px;

  margin: 40px 0;

  color: ${({theme}) => theme.COLORS.WHITE};

  padding: 15px;

  &::placeholder {
    color: ${({theme}) => theme.COLORS.GREY_200};
  }

  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  } 
  
`;