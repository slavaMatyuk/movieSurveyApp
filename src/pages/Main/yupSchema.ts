import * as yup from 'yup';

export const surveyFormSchema = yup.object().shape({
  film: yup.string().max(64).required("Please, enter movie's name"),
  review: yup
    .number()
    .min(1)
    .max(5)
    .typeError('Please, enter the number from 1 to 5')
    .required('Please, leave the review about the movie'),
});
