import { Container, Profile } from "./styles";

import {Input} from '../Input'

export function Header(){
  return(
    <Container>
      <span>RocketMovies</span>
      
      <Input placeholder="Pesquisar pelo título"/>

      <Profile>
        <div>
          <strong>Ítalo Vinícius</strong>
          <button>Sair</button>
        </div>

        <img src="https://github.com/Italovini223.png" alt="" />

      </Profile>
    </Container>
  )
}