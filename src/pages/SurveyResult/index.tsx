import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { AppText } from '@components/AppText';
import { submitVoteStateSelector } from '@store/selectors/submitVote';
import * as Styled from './styles';

export const SurveyResult: FC = () => {
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
