import styled from 'styled-components';
import BG_IMAGE from '@assets/images/cinema-hall.png';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${BG_IMAGE});
  background-size: cover;
  background-position: 50% 0;
  overflow: hidden;
`;
