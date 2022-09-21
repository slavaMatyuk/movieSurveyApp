import * as yup from 'yup';

export const surveyFormSchema = yup.object().shape({
  film: yup.string().max(64).required("Please, enter movie's name"),
  review: yup.string().required('Please, leave the review about the movie'),
});
