import { AppText } from '@components/AppText';
import React, { FC } from 'react';
import * as Styled from './styles';

export const Footer: FC = () => {
  return (
    <Styled.Container>
      <Styled.CopyRightsIcon />
      <AppText text="Any Company Limited 2022" size="sm" />
    </Styled.Container>
  );
};
