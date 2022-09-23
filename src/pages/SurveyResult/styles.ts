import styled from 'styled-components';
import RES_IMAGE from '@assets/images/bg-results.png';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${RES_IMAGE});
  background-size: cover;
  background-position: 50% 50%;
  overflow: hidden;

  & h1 {
    font-size: 36px;
    color: #781188;
    text-shadow: 2px 2px 0 #ffffff;
    margin: 2rem 0;
  }

  @media (max-width: 576px) {
    justify-content: center;
    & h1 {
      font-size: 28px;
    }
  }

  @media (max-width: 360px) {
    & h1 {
      font-size: 18px;
    }
  }
`;

export const VoteContainer = styled.div`
  width: 75%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 0 5px #0000aa;

  & h3 {
    font-size: 20px;
    flex: 1;
    padding-left: 2rem;
  }

  @media (max-width: 576px) {
    & h3 {
      font-size: 14px;
      padding-left: 1.5rem;
    }
  }

  @media (max-width: 360px) {
    & h3 {
      font-size: 10px;
      padding-left: 1rem;
    }
  }
`;
