import { Background, Container, Form } from "./styles";

import {Input} from '../../components/Input'
import { Button} from '../../components/Button'
import { ArrowButton} from '../../components/ArrowButton'

import {FiUser, FiMail, FiLock} from 'react-icons/fi'

export function SignUp(){
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
        />
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
        <Button title="Cadastrar"/>
       <div className="back">
        <ArrowButton 
            title="Voltar para o login" 
            link='/'
          />
       </div>
      </Form>
      <Background />
    </Container>
  )
}