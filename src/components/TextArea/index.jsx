import { Container } from "./styles";

export function TextArea({placeholder, ...rest}) {
  <Container>
    <textarea 
     placeholder={placeholder}
     {...rest}
    />
  </Container>
}