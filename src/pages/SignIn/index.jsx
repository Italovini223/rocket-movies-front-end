import { Background, Container, Form } from "./styles";

import {Input} from '../../components/Input'
import { Button} from '../../components/Button'
import { Link } from "react-router-dom";

import {FiUser, FiMail, FiLock} from 'react-icons/fi'


export function SignIn(){
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>
        <h2>Faça seu login</h2>
        <Input 
          icon={FiMail}
          type="text"
          placeholder="E-mail"
        />
        <Input 
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />
        <Button title="Entrar"/>
        <Link to='/register' class="register">
          Criar conta
        </Link>
      </Form>
      <Background />
    </Container>
  )
}