import { Container } from "./styles";
import {AiOutlineStar, AiFillStar} from 'react-icons/ai'
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'
import theme from "../../styles/theme";


export function RatingItem({value}) {
  return(
    <Container>

      <Stack spacing={1}>
        <Rating 
          name="Rating"
          defaultValue={value}
          precision={1}
          readOnly
          icon={<AiFillStar color={theme.COLORS.SALMON} size={20} />}
          emptyIcon={<AiOutlineStar color={theme.COLORS.SALMON} size={20} />}
        />
      </Stack>

    </Container>
  )
}