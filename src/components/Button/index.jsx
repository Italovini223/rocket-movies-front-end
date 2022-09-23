import { Container } from "./styles";

export function Button({title, type, loading = false, Delete = false}){
  return(
    <Container 
      typeof={type}
      disabled={loading}
      Deleted={Delete}
    >
      {loading ? "Loading..." : title}
    </Container>
  )
}