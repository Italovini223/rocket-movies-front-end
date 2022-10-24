import { useState } from "react";
import { Container, Content } from "./styles";

import{ Header} from '../../components/Header'
import {ArrowButton} from '../../components/ArrowButton';
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import {Button} from '../../components/Button'
import {InputTag} from '../../components/InputTag'


export function New() {
  const[tags, setTags] = useState([]);
  const[newTag, setNewTag] = useState("");

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag])
    setNewTag("");
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  return(
    <Container>
      <Header />
      <Content>
        <ArrowButton 
          title='Voltar'
          link='/'
        />

        <h1>Novo filme</h1>

        <div>
          <Input 
            type='text'
            id='title'
            placeholder='Titulo'
          />

          <Input 
            type='number'
            id='note'
            min={0}
            max={5}
            placeholder='Sua nota (de 0 a 5)'
          />
        </div>

        <TextArea 
          id='comment'
          placeholder='observações'
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
            type='submit'
          />
        </div>
      </Content>
    </Container>
  )
}