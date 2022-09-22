export const initialResponseMock = {
  data: {
    type: 'surveys',
    id: '2660dd24-e2db-42c1-8093-284b1df2664c',
    attributes: {
      title: 'Film feedback form',
      description:
        'Thank you for participating in the film festival! Please fill out this short survey so we can record your feedback.',
      questions: [
        {
          questionId: 'film',
          questionType: 'text',
          label: 'What film did you watch?',
          required: true,
          attributes: null,
        },
        {
          questionId: 'review',
          questionType: 'rating',
          label: 'How would you rate the film? (1 - Very bad, 5 - Very good)',

          required: true,
          attributes: {
            min: 1,
            max: 5,
          },
        },
      ],
    },
  },
};
