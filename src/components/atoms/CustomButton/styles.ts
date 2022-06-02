import styled from "styled-components";
import { TypeButton } from "./index";

export const Button = styled.button<TypeButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  position: ${props => props.position ? props.position : 'relative'};
  z-index: ${props => props.zIndex ? props.zIndex : '0'};
  margin: ${props => props.mg ? props.mg : '0px 0px 0px 0px'};

  
  background-color: #0099FF;
  color: #FFF;
  font-weight: bold;
  font-size: 16;

  border: 1px solid #0099ff;
  border-radius: 6px;

  padding: 15px;

  transition: filter 300ms;
  
  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
`;