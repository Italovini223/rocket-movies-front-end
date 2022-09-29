import { Container, Content, NewNote } from "./styles";

import {FiPlus} from 'react-icons/fi'

import {Header} from '../../components/Header'
import {Note} from '../../components/Note'

export function Home() {
  return(
    <Container>
      <Header />
      
      <main>
        <Content>

        <div class="head">
            <h1>Meus filmes</h1>
            <NewNote to='/new'>
              <FiPlus />
              Adicionar filme
            </NewNote>
          </div>

          <Note data={{
            title: "Interstellar",
            value: 4,
            description: `
            Pragas nas colheitas fizeram a civilização humana regredir 
            para uma sociedade agrária em futuro de data desconhecida. Cooper, 
            ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de 
            dez anos de Cooper, acredita que seu quarto está assombrado por um 
            fantasma que tenta se comunicar com ela. Pai e filha descobrem que o ,
            "fantasma" é uma inteligência desconhecida que está enviando mensagens 
            codificadas através de radiação gravitacional, deixando coordenadas em 
            binário que os levam até uma instalação secreta da NASA liderada pelo 
            professor John Brand.
             `,

             tags : [
              {id: 1, title:"Ficção cientifica"},
              {id: 2, title:"Drama"},
              {id: 3, title:"Familia"}
             ],

             id : 1,
          }}/>
          <Note data={{
            title: "Interstellar",
            value: 1,
            description: `
            Pragas nas colheitas fizeram a civilização humana regredir 
            para uma sociedade agrária em futuro de data desconhecida. Cooper, 
            ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de 
            dez anos de Cooper, acredita que seu quarto está assombrado por um 
            fantasma que tenta se comunicar com ela. Pai e filha descobrem que o ,
            "fantasma" é uma inteligência desconhecida que está enviando mensagens 
            codificadas através de radiação gravitacional, deixando coordenadas em 
            binário que os levam até uma instalação secreta da NASA liderada pelo 
            professor John Brand.
             `,

             tags : [
              {id: 1, title:"Ficção cientifica"},
              {id: 2, title:"Drama"},
              {id: 3, title:"Familia"}
             ]
          }}/>
          <Note data={{
            title: "Interstellar",
            value: 3,
            description: `
            Pragas nas colheitas fizeram a civilização humana regredir 
            para uma sociedade agrária em futuro de data desconhecida. Cooper, 
            ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de 
            dez anos de Cooper, acredita que seu quarto está assombrado por um 
            fantasma que tenta se comunicar com ela. Pai e filha descobrem que o ,
            "fantasma" é uma inteligência desconhecida que está enviando mensagens 
            codificadas através de radiação gravitacional, deixando coordenadas em 
            binário que os levam até uma instalação secreta da NASA liderada pelo 
            professor John Brand.
             `,

             tags : [
              {id: 1, title:"Ficção cientifica"},
              {id: 2, title:"Drama"},
              {id: 3, title:"Familia"}
             ]
          }}/>
        </Content>
      </main>
    </Container>
  )
}