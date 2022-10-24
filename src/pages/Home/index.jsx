import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Container, Content, NewNote } from "./styles";

import {FiPlus} from 'react-icons/fi'

import {Header} from '../../components/Header'
import {Note} from '../../components/Note'
import { api } from "../../services/api";

export function Home() {
  const[search, setSearch] = useState("");
  const[movieNotes, setMovieNotes] = useState([]);

  const navigate = useNavigate();

  function handleDetails(id){
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchMovieNotes(){
      const response = await api.get(`/notes?title=${search}`);
      setMovieNotes(response.data)
    }

    fetchMovieNotes();
  },[search])

  
  return(
    <Container>
      <Header onChange={e => setSearch(e.target.value)} />
      
      <main>
        <Content>

        <div className="head">
            <h1>Meus filmes</h1>
            <NewNote to='/new'>
              <FiPlus />
              Adicionar filme
            </NewNote>
          </div>

          {
            movieNotes.map(note => (
              <Note 
                data={note}
                key={String(note.id)}
                onClick={() => handleDetails(note.id)}
              />
            ))
          }
        </Content>
      </main>
    </Container>
  )
}