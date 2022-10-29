import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

import { Background, Container, Form } from "./styles";

import {Input} from '../../components/Input'
import { Button} from '../../components/Button'
import { ArrowButton} from '../../components/ArrowButton'
import { api } from '../../services/api';

import {FiUser, FiMail, FiLock} from 'react-icons/fi'

export function SignUp(){
  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp(){
    if(!name || !email || !password) {
     return alert("Preencha todos os campos");
    }

    api.post("/users", {
      name,
      email,
      password
    })
    .then(() => {
      alert("Usuário cadastrado com sucesso");
      navigate("/")
    })
    .catch((error) =>{
      if(error.response){
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar!")
      }
    })

  }

  function handleBack() {
    navigate(-1);
  }

  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>
        <h2>Crie sua conta</h2>

        <Input 
          icon={FiUser}
          type="text"
          placeholder="Nome"
          onChange={e => setName(e.target.value)}
        />
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
          title="Cadastrar"
          onClick={handleSignUp}
        />
       <div className="back">
        <ArrowButton 
            title="Voltar para o login" 
            onClick={handleBack}
          />
       </div>
      </Form>
      <Background />
    </Container>
  )
}