import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ErrorContainer = styled.div`
  color: '#ac1212';
  font-size: 12px;
  margin: 8px 0;
`;

export const Input = styled.input<{ fontSize: number }>`
  font-size: ${(props) => props.fontSize}px;
  padding: 16px;
  margin: 8px 0;
  border-radius: 8px;
  box-sizing: border-box;
  height: 100%;

  &:focus {
    background-color: '#0f3f0f';
    box-shadow: 0 0 0 2px '#ac1212';
  }
`;
