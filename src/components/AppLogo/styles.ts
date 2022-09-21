import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoWrapper = styled.div`
  width: 48px;
  height: auto;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const LogoWithText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
`;
