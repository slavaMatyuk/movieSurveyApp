import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  background-color: #ffeeee;

  & h1 {
    margin: 0 auto;
  }

  @media (max-width: 576px) {
    & h1 {
      font-size: 18px;
    }
  }
`;
