import styled from 'styled-components';
import { MdCopyright } from 'react-icons/md';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  min-height: 50px;
  padding: 20px;
  background-color: #000000;
  color: #bcbcbc;

  & p {
    line-height: 21px;
  }

  @media (max-width: 576px) {
    justify-content: center;
  }
`;

export const CopyRightsIcon = styled(MdCopyright)`
  font-size: 20px;
  margin-right: 0.5rem;
`;
