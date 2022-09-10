import { Container, Form } from "./styles";

import { ArrowButton } from "../../components/ArrowButton";
import { Input } from "../../components/Input";

import {FiUser, FiMail, FiLock} from 'react-icons/fi'

export function Profile() {
  return(
    <Container>
      <header>
        <ArrowButton title="Voltar" />
      </header>

      <Form>
        <Input
          value="Ítalo Vinícius"
          tipe="text"
          icon={FiUser}
        />
            <Input
          value="ÍtaloVinícius2018@gmail.com"
          title="text"
          icon={FiMail}
        />
        <Input
          type="password"
          placeholder="Senha Atual"
          icon={FiLock}
        />
        <Input
          type="password"
          placeholder="Nova Senha"
          icon={FiLock}
        />
      </Form>
    </Container>
  )
}