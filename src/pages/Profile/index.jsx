import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi'

import { Avatar, Container, Form } from "./styles";

import { useAuth } from "../../hooks/auth";

import { ArrowButton } from "../../components/ArrowButton";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { api } from "../../services/api";



export function Profile() {
  const {user, updateProfile} = useAuth();

  const[name, setName] = useState(user.name);
  const[email, setEmail] = useState(user.email);
  const[passwordOld, setPasswordOld] = useState("");
  const[passwordNew, setPasswordNew] = useState("");

  const navigate= useNavigate();


  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const[avatar, setAvatar] = useState(avatarUrl);
  const[avatarFile, setAvatarFile] = useState(null);
  
  function handleBack(){
    navigate(-1)
  }

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }

    const userUpdated = Object.assign(user, updated);

   await updateProfile({user: userUpdated, avatarFile});
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }


  return(
    <Container>
      <header>
        <ArrowButton title="Voltar" onClick={handleBack}/>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt="" />
          <label htmlFor="avatar">
            <FiCamera/>
            <input type="file" id="avatar" onChange={handleChangeAvatar} />
          </label>
        </Avatar>
        <Input
          value={name}
          tipe="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />
        <Input
          value={email}
          title="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha Atual"
          icon={FiLock}
          onChange={e => setPasswordOld(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Nova Senha"
          icon={FiLock}
          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button 
          title="Salvar" 
          onClick={handleUpdate}
        />
      </Form>
    </Container>
  )
}