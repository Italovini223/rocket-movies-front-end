import { Container } from "./styles";



import { Tags } from "../Tags";
import { RatingItem } from "../RatingItem";

export function Note({data, ...rest}){
  return(
    <Container to={`/details/${data.id}`}>
      <h2>{data.title}</h2>
      <RatingItem 
        value={data.rating}
      />

      <p>{data.description}</p>

      {
        data.tags && 
        <footer>
          {
            data.tags.map(tag => <Tags key={tag.id}  title={tag.name}/>)
          }
        </footer>
      }

      
    </Container>
  )
}