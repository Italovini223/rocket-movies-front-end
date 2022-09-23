import { Container, Content } from "./styles";

import{ Header} from '../../components/Header'
import {ArrowButton} from '../../components/ArrowButton';
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";

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
            placeholder='Titulo'
          />

          <Input 
            type='number'
            min={0}
            max={5}
            placeholder='Sua nota (de 0 a 5)'
          />
        </div>
        <TextArea 
          placeholder='observações'
        />
      </Content>
    </Container>
  )
}