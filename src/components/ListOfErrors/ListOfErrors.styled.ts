import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`

export const Message = styled.p`
  font-size: 1rem;
  margin: 0;
`

export const Button = styled.button`
  outline: none;
  background-color: #a8dadc;
  padding: 0.75rem 1rem;

  &:hover {
    cursor: pointer;
    background-color: #457b9d;
    color: white;
    border: none;
  }
`