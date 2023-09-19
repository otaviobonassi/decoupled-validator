import { styled } from "styled-components";

export const ErrorCircle = styled.div`
  min-width: 35px;
  min-height: 35px;
  border-radius: 50%;
  background-color: #e63946;
  position: relative;

  &::after {
    content: "X";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.8rem;
    color: white;
  }
`