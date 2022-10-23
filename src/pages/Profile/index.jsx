import { useState } from "react";
import {FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi'

import { Avatar, Container, Form } from "./styles";

import { useAuth } from "../../hooks/auth";

import { ArrowButton } from "../../components/ArrowButton";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";



export function Profile() {
  const {user} = useAuth();

  const[name, setName] = useState(user.name);
  const[email, setEmail] = useState(user.email);
  const[passwordOld, setPasswordOld] = useState("");
  const[passwordNew, setPasswordNew] = useState("");

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
          value={name}
          tipe="text"
          icon={FiUser}
        />
        <Input
          value={email}
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