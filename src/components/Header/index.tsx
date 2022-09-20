import React, { FC } from 'react';
import { AppLogo } from '@components/AppLogo';
import * as Styled from './styles';

export const Header: FC = () => {
  return (
    <Styled.Container>
      <AppLogo />
      <p>Header Header Header Header</p>
    </Styled.Container>
  );
};
