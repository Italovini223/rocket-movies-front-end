import { useState } from "react";

import { Background, Container, Form } from "./styles";

import {Input} from '../../components/Input'
import { Button} from '../../components/Button'
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import {FiMail, FiLock} from 'react-icons/fi'


export function SignIn(){
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  const {singIn} = useAuth();

  function handleSingIn(){
    singIn({email, password});
  }


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
          onChange={e => setEmail(e.target.value)}
        />
        <Input 
          icon={FiLock}
          type="password"
          placeholder="Senha"
          onChange={e => setPassword(e.target.value)}
        />
        <Button 
          title="Entrar"
          onClick={handleSingIn}
          />
        <Link to='/register' className="register">
          Criar conta
        </Link>
      </Form>
      <Background />
    </Container>
  )
}