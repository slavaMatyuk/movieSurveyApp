import React, { FC } from 'react';
import LOGO_URL from '@assets/images/app-logo.png';
import { Props } from './types';
import * as Styled from './styles';

export const AppLogo: FC<Props> = ({ isMobile = false }) => (
  <Styled.CustomLink to="/">
    <Styled.LogoWrapper>
      <Styled.LogoWithText>
        <img src={LOGO_URL} alt="logo" height={isMobile ? '24' : '48'} width={isMobile ? '24' : '48'} />
      </Styled.LogoWithText>
    </Styled.LogoWrapper>
  </Styled.CustomLink>
);
