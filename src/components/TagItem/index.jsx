import { Container } from "./styles";
import {FiPlus, FiX} from 'react-icons/fi'

export function TagItem({isNew, value, onClick, ...rest}) {
  <Container
    isNew={isNew}
  >
    <input type="text" 
      value={value}
      readOnly={!isNew}
      {...rest}
    />

    <button
      type="text"
      onClick={onclick}
    >
      {isNew ? <FiPlus /> : <FiX />}
    </button>
  </Container>
}