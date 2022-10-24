import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Content } from "./styles";

import { api } from "../../services/api";


import{ Header} from '../../components/Header'
import {ArrowButton} from '../../components/ArrowButton';
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import {Button} from '../../components/Button'
import {InputTag} from '../../components/InputTag'


export function New() {
  const [title, setTitle] = useState("");
  const[description, setDescription] = useState("");
  const[rating, setRating] = useState(0);
  const[tags, setTags] = useState([]);
  const[newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleBack(){
    navigate(-1)
  }

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag])
    setNewTag("");
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewNote(){
    if(newTag){
      return alert('Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique em adicionar ou deixe o campo vazio');
    }
    if(!title){
      return alert('Digite o título da nota')
    }
    if(!rating){
      return alert('Insira uma avaliação!')
    }
    
    await api.post("/notes", {
      title,
      description,
      rating,
      tags
    });

    alert("nota criada com sucesso!");
    navigate("/");
  }

  return(
    <Container>
      <Header />
      <Content>
        <ArrowButton 
          title='Voltar'
          onClick={handleBack}
        />

        <h1>Novo filme</h1>

        <div>
          <Input 
            type='text'
            id='title'
            placeholder='Titulo'
            onChange={e => setTitle(e.target.value)}
          />

          <Input 
            type='number'
            id='note'
            min={0}
            max={5}
            placeholder='Sua nota (de 0 a 5)'
            onChange={e => setRating(e.target.value)}
          />
        </div>

        <TextArea 
          id='comment'
          placeholder='observações'
          onChange={e => setDescription(e.target.value)}
        />
        
        <h3>Marcadores</h3>

        <div className="Tags">
          {
            tags.map((tag, index) => (
              <InputTag 
                value={tag}
                key={String(index)}
                onClick={() => handleRemoveTag(tag)}
              />
            ))
          }
          <InputTag 
            value={newTag}
            onChange={e => setNewTag(e.target.value)}
            onClick={handleAddTag}
            isNew
          />
         
        </div>

        <div className="buttons">
        <Button 
            title='Excluir filme'
            type='submit'
            Delete
          />
           <Button 
            title='Salvar alterações'
            onClick={handleNewNote}
          />
        </div>
      </Content>
    </Container>
  )
}