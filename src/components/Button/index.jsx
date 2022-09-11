import { Container } from "./styles";

export function Button({title, loading = false}){
  return(
    <Container 
      typeof="button"
      disabled={loading}
    >
      {loading ? "Loading..." : title}
    </Container>
  )
}