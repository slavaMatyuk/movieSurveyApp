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
        {submitVote?.data.attributes.answers.map((answer) => {
          return <AppText key={answer.questionId} tag="h3" text={answer.answer.toString()} />;
        })}
      </Styled.VoteContainer>
    </Styled.Container>
  );
};
