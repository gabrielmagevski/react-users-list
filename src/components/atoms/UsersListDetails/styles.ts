import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const UsersTrs = styled.tr`
  animation: ${slideIn} 0.5s cubic-bezier(0.4, 0, 0.2, 1) both;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  gap: 150px;
`;

export const UsersTitle = styled.th`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  width: 40px;
`;

export const UsersInformations = styled.td`
  font-size: 18px;
  text-align: center;
  width: 40px;

`;
