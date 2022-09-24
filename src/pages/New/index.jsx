import { Container, Content } from "./styles";

import{ Header} from '../../components/Header'
import {ArrowButton} from '../../components/ArrowButton';
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import {Button} from '../../components/Button'

export function New() {
  return(
    <Container>
      <Header />
      <Content>
        <ArrowButton 
          title='Voltar'
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