import { Container, Content, NewNote } from "./styles";

import {FiPlus} from 'react-icons/fi'

import {Header} from '../../components/Header'

export function Details() {
  return(
    <Container>
      <Header />
      <main>
        <Content>
          <div>
            <h1>Meus filmes</h1>
            <NewNote>
              <FiPlus />
              Adicionar filme
            </NewNote>
          </div>
        </Content>
      </main>
    </Container>
  )
}