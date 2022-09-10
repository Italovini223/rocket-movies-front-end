import { Container } from "./styles";

import {FiArrowLeft} from 'react-icons/fi'

export function ArrowButton({title}){
 return(
  <Container>
    <FiArrowLeft />
    <span>{title}</span>
  </Container>
 )
}