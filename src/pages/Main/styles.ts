import styled from 'styled-components';
import BG_IMAGE from '@assets/images/cinema-hall.png';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-image: url(${BG_IMAGE});
  background-size: cover;
  background-position: 50% 0;
  overflow: hidden;
`;

export const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-style: italic;
`;

export const ButtonContainer = styled.button`
  width: 100%;
  height: 54px;
  padding: 5px;
  margin-top: 24px;
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  letter-spacing: 1px;
  background-color: #1f2f9a;
  color: #ffffff;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #2f8fcf;
  }

  &:active {
    background-color: #2f8fcf75;
  }

  @media (max-width: 576px) {
    width: auto;
    padding: 0 15px;
  }
`;
