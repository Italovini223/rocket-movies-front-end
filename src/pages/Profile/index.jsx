import { Avatar, Container, Form } from "./styles";

import { ArrowButton } from "../../components/ArrowButton";
import { Input } from "../../components/Input";

import {FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi'
import { Button } from "../../components/Button";

export function Profile() {
  return(
    <Container>
      <header>
        <ArrowButton title="Voltar" link="/" />
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/Italovini223.png" alt="" />
          <label htmlFor="avatar">
            <FiCamera/>
            <input type="file" id="avatar" />
          </label>
        </Avatar>
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

        <Button title="Salvar" />
      </Form>
    </Container>
  )
}