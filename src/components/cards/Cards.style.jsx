import styled from 'styled-components';
import Flex from '../globalstyles/Flex.styled';

export const MainContainer = styled(Flex)`
  flex-direction: row;

`;
export const Card = styled(Flex)`
  flex-direction: column;
  height: 20rem;
  width: 17rem;
background-color: #ebe889;
  padding: 0.5rem;
  border-radius: 10px;
  margin: 0.7rem;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 1);
  &:hover {
    box-shadow: none;
    transition: all 0.3s ease-in;
  }
`;

export const Image = styled.img`
  height: 10rem;
  border-radius: 10px;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.mainColor};
  padding: 0.7rem;
  
  outline: none;
  border: 1px solid black;
  margin: 1rem 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 3px 3px 7px rgba(0, 0, 0, 1);

  &:hover {
    transform:scale(0.97);
    box-shadow: none;


  }
`;

export const Header = styled.h1`
  font-size: 1.5rem;
  text-align: center;
`;