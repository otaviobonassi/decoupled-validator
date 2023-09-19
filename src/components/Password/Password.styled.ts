import { styled } from "styled-components";

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export const Wrapper = styled.section`
  width: 70%;
  display: flex;
  gap: 2rem;
  justify-content: center;

  input {
    width: 30%;
  }
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: 1.5rem;
`