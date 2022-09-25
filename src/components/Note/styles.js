import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Container = styled(Link)`
  width: 100%;

  text-decoration: none;

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
    margin: 15px 0;

    font-size: 16px;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.GREY_400};

    text-align: justify;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
  }

  > footer {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 8px;
  }
`;