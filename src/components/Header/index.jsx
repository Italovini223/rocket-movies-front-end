import { Container, Profile } from "./styles";
import {Link} from 'react-router-dom'
import { useAuth } from "../../hooks/auth";

import {Input} from '../Input'

export function Header(){
  const {SingOut} = useAuth();
  return(
    <Container>
      <span>RocketMovies</span>
      
      <Input placeholder="Pesquisar pelo título"/>

      <Profile>
        <div>
          <strong>Ítalo Vinícius</strong>
          <button onClick={SingOut}>Sair</button>
        </div>

        <Link to='/profile'>
          <img src="https://github.com/Italovini223.png" alt="" />
        </Link>

      </Profile>
    </Container>
  )
}