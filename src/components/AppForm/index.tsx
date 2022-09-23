import React, { FC } from 'react';
import * as Styled from './styles';
import { AppFormProps } from './types';

export const AppForm: FC<AppFormProps> = ({ title = '', onSubmit, children }) => (
  <Styled.Container>
    <Styled.Content>
      {title && <Styled.Title>{title}</Styled.Title>}
      <Styled.Form onSubmit={onSubmit}>{children}</Styled.Form>
    </Styled.Content>
  </Styled.Container>
);
