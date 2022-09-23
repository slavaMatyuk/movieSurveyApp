import React, { FC } from 'react';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import * as Styled from './styles';
import { Props } from './types';

export const AppWrapper: FC<Props> = ({ children }) => (
  <>
    <Header />
    <Styled.Container>{children}</Styled.Container>
    <Footer />
  </>
);
