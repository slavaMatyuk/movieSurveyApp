import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex: 1 1 auto;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  color: ${(props) => props.theme.colors.textColor};
`;
