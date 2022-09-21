import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AppForm } from '@components/AppForm';
import { AppInput } from '@components/AppInput';
import { submitVoteAction } from '@store/actions/submitVote';
import { surveyFormSchema } from './yupSchema';
import * as Styled from './styles';

export const Main: FC = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(surveyFormSchema), mode: 'onChange' });

  const onSubmit = () => {
    dispatch(submitVoteAction.request());
  };

  return (
    <Styled.Container>
      <AppForm title="Survey Form" onSubmit={handleSubmit(onSubmit)}>
        <AppInput error={errors?.film?.message as string} placeholder="Film" type="text" {...register('film')} />
        <AppInput
          error={errors?.review?.message as string}
          placeholder="Review (from 1 to 5)"
          type="text"
          {...register('review')}
        />

        <Styled.ButtonContainer>Leave feedback</Styled.ButtonContainer>
      </AppForm>
    </Styled.Container>
  );
};
