import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  max-width: 600px;
  width: 95%;
  border: 1px solid;
  border-color: '#aaaaaa';
  background-color: '#cfcfcf';
  padding: 20px;
  border-radius: 8px;
  align-items: center;
`;

export const Title = styled.h1`
  color: '#0f3f0f';
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const SubmitFormLink = styled.div`
  padding-top: 10px;
  color: '#0f3f0f';
  font-size: 16px;
  a {
    color: '#4f3f0a';
    text-decoration: none;
    padding-left: 5px;

    &:hover {
      text-decoration: underline;
    }
  }
`;
