import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  background-color: #b0d0f0;
  box-shadow: 0 5px 10px white;

  & h1 {
    margin: 0 auto;
    font-style: italic;
  }

  @media (max-width: 576px) {
    & h1 {
      font-size: 18px;
    }
  }
`;
