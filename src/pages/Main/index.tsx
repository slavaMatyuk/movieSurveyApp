import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AppForm } from '@components/AppForm';
import { AppInput } from '@components/AppInput';
import { surveyFormSchema } from './yupSchema';
import * as Styled from './styles';
import { getResponseAction } from '@store/actions/getResponse';
import { initialFormSelector } from '@store/selectors/getResponse';
import { submitVoteAction } from '@store/actions/submitVote';

export const Main: FC = () => {
  const dispatch = useDispatch();
  const initFormData = useSelector(initialFormSelector);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(surveyFormSchema), mode: 'onChange' });
  const onSubmit = (data: FieldValues) => {
    const answers = Object.entries(data).map(([questionId, answer]) => ({
      questionId,
      answer,
    }));

    const body = {
      data: { attributes: { answers }, type: initFormData?.data.type || '' },
      id: initFormData?.data.id || '',
    };
    dispatch(submitVoteAction.request(body));
  };

  const handleReset = () => {
    reset();
  };

  useEffect(() => {
    dispatch(getResponseAction.request());
  }, [dispatch]);

  return (
    <Styled.Container>
      {initFormData && (
        <AppForm title={initFormData?.data.attributes.title} onSubmit={handleSubmit(onSubmit)}>
          <Styled.Description
            dangerouslySetInnerHTML={{ __html: initFormData?.data.attributes.description }}
          ></Styled.Description>
          {initFormData?.data.attributes.questions.map((question) => {
            return (
              <AppInput
                error={errors && (errors[question.questionId]?.message as string)}
                key={question.questionId}
                placeholder={question.label}
                type="text"
                {...register(question.questionId, { required: question.required })}
              />
            );
          })}
          <Styled.ButtonContainer type="submit">Leave feedback</Styled.ButtonContainer>
          <Styled.ButtonContainer onClick={handleReset}>Reset</Styled.ButtonContainer>
        </AppForm>
      )}
    </Styled.Container>
  );
};
