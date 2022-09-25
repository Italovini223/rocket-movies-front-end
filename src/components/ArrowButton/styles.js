import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Container = styled(Link)`

  text-decoration: none;

  display: flex;
  align-items: center;
  gap: 8px;
  
  border: none;
  background: none;

  

  color: ${({theme}) => theme.COLORS.SALMON};

  > span {
    font-size: 16px;
    font-weight: 400;

    color: ${({theme}) => theme.COLORS.SALMON};
  }

  > svg {
    color: ${({theme}) => theme.COLORS.SALMON};
  }
`;