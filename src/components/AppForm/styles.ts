import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  margin: 2rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-width: 200px;
  width: 100%;
  max-width: 600px;
  height: auto;
  border: 1px solid #dedede;
  background-color: #ffffff;
  box-shadow: 0 0 7px 1px #ffffff;
  padding: 20px;
  border-radius: 8px;
`;

export const Title = styled.h1`
  color: inherit;
  text-transform: uppercase;

  @media (max-width: 576px) {
    font-size: 24px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
