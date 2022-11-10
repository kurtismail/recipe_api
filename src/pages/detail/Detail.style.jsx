import styled from 'styled-components';
import { Button } from '../../components/cards/Cards.style';
import Flex from '../../components/globalstyles/Flex.styled';

export const DetailContainer = styled(Flex)`
  flex-direction: column;
  background: #e8a63c;
  min-height: calc(100vh - 75px);
  padding: 0.5rem;
`;

export const DetailPart = styled(Flex)`
  flex-direction: row;
  margin: 1rem;
  border: 1px solid white;
  border-radius: 5px;
  background-color: #ece68d;
`;

export const ImgContainer = styled.div`
border: 5px solid #00adb5;  
padding: 10px;
  border-radius: 3px;
  margin: 2rem;
  img {
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderContainer = styled(Flex)`
  margin: 25px;
  img {
    width: 200px;
  }
`;

export const IngContainer = styled.div`
  width: 400px;
  font-size: 1.4rem;
  margin: 2rem;
`;

export const OtherPart = styled.div`
  width: 400px;
  text-align: right;
  font-size: 1.8rem;
  margin: 2rem;
`;
export const DetailButton = styled(Button)`
    padding: 0.2rem 2rem;
    background-color: #44ed3e;
    color: #0f0332;
    font-size: 1.6rem;
    font-weight: 700;
`; 