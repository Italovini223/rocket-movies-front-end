import { Container } from "./styles";



import { Tags } from "../Tags";
import { RatingItem } from "../RatingItem";

export function Note({data, ...rest}){
  return(
    <Container>
      <h2>{data.title}</h2>
      <RatingItem 
        value={data.value}
      />

      <p>{data.description}</p>

      {
        data.tags && 
        <footer>
          {
            data.tags.map(tag => <Tags key={tag.id}  title={tag.title}/>)
          }
        </footer>
      }

      
    </Container>
  )
}