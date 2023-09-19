import { ErrorCircle } from '../ErrorCircle/ErrorCircle';
import { Button, Container, Message, Wrapper } from './ListOfErrors.styled';

interface ListOfErrorsProps {
  errors: string[];
  hasValue: boolean;
}

export default function ListOfErrors({ hasValue, errors }: ListOfErrorsProps) {

  if (!hasValue) return null;

  if (!errors?.length) return <Button>You are good to go!</Button>


  return (
    <Container>
      {errors?.map(error => (
        <Wrapper key={error}>
          <ErrorCircle />
          <Message>{error}</Message>
        </Wrapper>
      ))}

    </Container>
  )
}