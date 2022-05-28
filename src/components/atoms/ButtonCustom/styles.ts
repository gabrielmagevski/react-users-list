import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  
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