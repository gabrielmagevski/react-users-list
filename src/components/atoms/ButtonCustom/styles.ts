import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: #0099FF;
  color: #FFF;
  font-weight: bold;
  font-size: 16;

  border: none;
  border-radius: 8px;

  padding: 10px;

  transition: filter 300ms;
  
  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
`;