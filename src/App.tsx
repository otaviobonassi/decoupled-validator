import { Container } from './App.styled'
import Password from './components/Password/Password'
import { PossibleErrors } from './services/validation'

function App() {
  return (
    <Container>
      <Password passwordReqs={[PossibleErrors.hasUppercase, PossibleErrors.hasSpecialChar, PossibleErrors.hasNoConsecutiveLetters, PossibleErrors.hasNumber]}/>
    </Container>
  )
}

export default App
