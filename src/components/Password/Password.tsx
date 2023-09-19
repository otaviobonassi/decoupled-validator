import { useState } from 'react';
import { Container, Title, Wrapper } from './Password.styled'
import { Input } from '../Input/Input.styled';
import ListOfErrors from '../ListOfErrors/ListOfErrors';
import { ErrorDetail, passwordSchema } from '../../services/validation';

export default function Password() {
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  const handleValidation = (value: string):string[] => {
    if(!value) return [];

    const validations = passwordSchema.validate(value, { details: true }) as ErrorDetail[];
    return (validations || []).map(validation => validation?.message);
  }

  const handlePasswordInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt?.target || {};
    const validation = handleValidation(value);
    setErrors(validation);
    setPassword(value);
  }

  return (
    <Container>
      <Title>Password Component</Title>
      <Wrapper>
        <Input type="text" placeholder='Insert your password...' value={password} onChange={handlePasswordInput}/>
        <ListOfErrors hasValue={Boolean(password)} errors={errors} />
      </Wrapper>
    </Container>
  )
}