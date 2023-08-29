import { styled } from 'styled-components';

export const BtnList = styled.ul`
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 20px;
  margin-top: 20px;
`;

export const Button = styled.button`
  width: 130px;
  padding: 10px;
  border-radius: 10px;
  font-size: 26px;
  color: white;
  background-color: #444444;
  transition: transform 200ms linear;
  text-transform: capitalize;

  :hover {
    transform: scale(1.1);
  }
`;
