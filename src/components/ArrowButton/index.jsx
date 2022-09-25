import { Container } from "./styles";


import {FiArrowLeft} from 'react-icons/fi'

export function ArrowButton({title, link}){
 return(
  <Container to={link}>
    <FiArrowLeft />
    <span>{title}</span>
  </Container>
 )
}