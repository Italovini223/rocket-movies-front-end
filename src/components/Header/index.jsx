import {Link} from 'react-router-dom'

import { Container, Profile } from "./styles";

import { useAuth } from "../../hooks/auth";
import { api } from '../../services/api';


import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import {Input} from '../Input'

export function Header({onChange}){
  const {SingOut, user} = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  return(
    <Container>
      <span>RocketMovies</span>
      
      <Input placeholder="Pesquisar pelo título" onChange={onChange}/>

      <Profile>
        <div>
          <strong>{user.name}</strong>
          <button onClick={SingOut}>Sair</button>
        </div>

        <Link to='/profile'>
          <img src={avatarUrl} alt="Imagem do usuário" />
        </Link>

      </Profile>
    </Container>
  )
}