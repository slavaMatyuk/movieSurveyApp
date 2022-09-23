import React, { FC } from 'react';
import { AppLogo } from '@components/AppLogo';
import { AppText } from '@components/AppText';
import useWindowDimensions from '@utils/hooks/useWindowDimension';
import * as Styled from './styles';

export const Header: FC = () => {
  const { isMobile } = useWindowDimensions();
  return (
    <Styled.Container>
      <AppLogo isMobile={isMobile} />
      <AppText tag="h1" text="The National Film Festival welcomes you!" />
    </Styled.Container>
  );
};
