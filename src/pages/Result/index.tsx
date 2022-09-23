import React, { FC } from 'react';
import { AppText } from '@components/AppText';
import * as Styled from './styles';
import { useSelector } from 'react-redux';
import { submitVoteStateSelector } from '@store/selectors/submitVote';

export const Result: FC = () => {
  const { submitVote } = useSelector(submitVoteStateSelector);

  return (
    <Styled.Container>
      <AppText tag="h1" text="Thank you for participating!" />
      <Styled.VoteContainer>
        <AppText tag="h3" text={'Interstellar'} />
        <AppText tag="h3" text="5" />
      </Styled.VoteContainer>
    </Styled.Container>
  );
};
