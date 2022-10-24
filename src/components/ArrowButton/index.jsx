import { Container } from "./styles";


import {FiArrowLeft} from 'react-icons/fi'

export function ArrowButton({title, ...rest}){
 return(
  <Container {...rest}>
    <FiArrowLeft />
    <span>{title}</span>
  </Container>
 )
}