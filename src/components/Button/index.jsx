import { Container } from "./styles";

export function Button({title, loading = false, Delete = false, ...rest}){
  return(
    <Container 
      disabled={loading}
      Deleted={Delete}
      type="button"
      {...rest}
    >
      {loading ? "Loading..." : title}
    </Container>
  )
}