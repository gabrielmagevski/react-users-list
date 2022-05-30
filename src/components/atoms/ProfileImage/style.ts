import styled from "styled-components";
import { TypeProfileImage } from "../../../@types";

export const ProfilePicker = styled.img<TypeProfileImage>`
  border-radius: 50%;
  width: ${props => props.wd ? props.wd : '70px'};
`;