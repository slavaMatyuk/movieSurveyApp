import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AppForm } from '@components/AppForm';
import { AppInput } from '@components/AppInput';
import { submitVoteAction } from '@store/actions/submitVote';
import { getResponseAction } from '@store/actions/startApp';
import { initialFormSelector } from '@store/selectors/startApp';
import { surveyFormSchema } from './yupSchema';
import * as Styled from './styles';

export const Main: FC = () => {
  const dispatch = useDispatch();
  const initFormData = useSelector(initialFormSelector);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(surveyFormSchema), mode: 'onChange' });

  const onSubmit = () => {
    dispatch(submitVoteAction.request()); // передать заполненные данные
  };

  useEffect(() => {
    dispatch(getResponseAction.request());
  }, [dispatch]);

  return (
    <Styled.Container>
      <AppForm title={initFormData?.data.attributes.title as string} onSubmit={handleSubmit(onSubmit)}>
        <Styled.Description>{initFormData?.data.attributes.description}</Styled.Description>
        {initFormData?.data.attributes.questions.map((question) => {
          return (
            <AppInput
              error={errors?.film?.message as string}
              key={question.questionId}
              placeholder={question.label}
              type="text"
              {...register(question.questionId, { required: question.required })}
            />
          );
        })}
        <Styled.ButtonContainer>Leave feedback</Styled.ButtonContainer>
      </AppForm>
    </Styled.Container>
  );
};
