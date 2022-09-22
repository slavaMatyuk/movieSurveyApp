import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const ErrorContainer = styled.div`
  color: #bf1212;
  font-size: 12px;
  margin: 8px 0;
  position: absolute;
  top: -5px;
  left: 18px;

  @media (max-width: 576px) {
    left: 10px;
  }

  @media (max-width: 360px) {
    top: 64px;
    left: 1px;
  }
`;

export const Input = styled.input<{ fontSize: number }>`
  font-size: ${(props) => props.fontSize}px;
  padding: 16px;
  margin: 20px 0;
  border-radius: 8px;
  box-sizing: border-box;
  height: 100%;

  &:focus {
    background-color: #b0d0f075;
  }

  @media (max-width: 576px) {
    padding: 12px;
    font-size: 16px;
  }
`;
