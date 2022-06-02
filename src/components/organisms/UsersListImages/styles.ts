import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const UsersImagesTrs = styled.tr`
  animation: ${slideIn} 0.5s cubic-bezier(0.4, 0, 0.2, 1) both;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 50px;
  gap: 150px;
`;

export const ProfileName = styled.h3`
  font-weight: 500;
  margin-top: 5px;
  text-align: center;
`;

export const UsersImageInformations = styled.td`
  font-size: 18px;
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