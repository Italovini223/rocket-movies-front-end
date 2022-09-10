import { Container } from "./styles";

import {FiArrowLeft} from 'react-icons/fi'

export function ArrowButton({title}){
  <Container>
    <FiArrowLeft />
    <span>{title}</span>
  </Container>
}