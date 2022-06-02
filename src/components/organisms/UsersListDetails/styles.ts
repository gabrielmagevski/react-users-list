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
  gap: 70px;
`;

export const UsersTitle = styled.th`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  width: 200px;
`;

export const UsersInformations = styled.td`
  font-size: 18px;
  text-align: center;
  width: 200px;

`;

export const UserDontFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 250px;

  font-size: 30px;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
`;