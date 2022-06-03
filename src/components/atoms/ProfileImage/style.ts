import styled from "styled-components";
import { TypeProfileImage } from ".";

export const ProfilePicker = styled.img<TypeProfileImage>`
  border-radius: 50%;
  width: ${props => props.wd ? props.wd : '70px'};
  position: ${props => props.position ? props.position : 'relative'};
`;