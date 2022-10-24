import { useState,useEffect } from "react";
import { Container, Content, Headers } from "./styles";

import { useParams, useNavigate } from "react-router-dom";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import {Header} from '../../components/Header'
import {ArrowButton} from '../../components/ArrowButton'
import {RatingItem} from '../../components/RatingItem'

import { FiClock, FiTrash} from "react-icons/fi";

import { Tags } from "../../components/Tags";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'



export function Details(){
  const {user} = useAuth(); 
  const[data, setData] = useState(null);
  
  const navigate = useNavigate();
  const params = useParams();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  async function handleRemove(){
    const confirm = window.confirm("Deseja realmente remover a nota?");

    if(confirm){
      await api.delete(`/notes/${params.id}`)
      navigate("/");
    }
  }

  function handleBack(){
    navigate(-1)
  }

  useEffect(() => {
    async function fetchMovieNotes() {
      const response = await api.get(`notes/${params.id}`);

      setData(response.data);
    }

    fetchMovieNotes();
  },[])
 return(
  <Container>
    <Header />
    {
      data &&
      <Content>
        <Headers>
          <ArrowButton 
            title='Voltar'
            onClick={handleBack}
          />

          <button 
           onClick={handleRemove}
          >
            Excluir Nota 
            <FiTrash />
          </button>
        </Headers>

          <div className="movie-info">
            <h1>{data.title}</h1>
            <RatingItem 
              value={data.rating}
            />
          </div>

          

          <div className="note-info">
            <div className="created-by">
              <img src={avatarUrl} alt="" />
              <span>por {user.name}</span>
            </div>
            <div className="created-at">
              <FiClock />
              <span>{data.created_at}</span>
            </div>
          </div>
          
          {
           data.tags && 
            <div className="tags">
              {
                data.tags.map(tag => (
                  <Tags 
                    title={tag.name}
                    key={String(tag.id)}
                  />
                ))
              }
            
            </div>
          }

          <p>
            {data.description}
          </p>
        </Content>
      }

    
  </Container>
 )
}