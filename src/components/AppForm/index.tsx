import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './styles';
import { AppFormProps } from './types';

export const AppForm: FC<AppFormProps> = ({ title = '', onSubmit, link, children }) => (
  <Styled.Container>
    <Styled.Content>
      {title && <Styled.Title>{title}</Styled.Title>}
      <Styled.Form onSubmit={onSubmit}>{children}</Styled.Form>
      {link && (
        <Styled.SubmitFormLink>
          {link.text} <Link to={link.link}>{link.title}</Link>
        </Styled.SubmitFormLink>
      )}
    </Styled.Content>
  </Styled.Container>
);
