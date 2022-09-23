export interface GetSurveyFormData {
  data: {
    type: string;
    id: string;
    attributes: {
      title: string;
      description: string;
      questions: [
        {
          questionId: string;
          questionType: string;
          label: string;
          required: true;
          attributes: null;
        },
        {
          questionId: string;
          questionType: string;
          label: string;

          required: boolean;
          attributes: {
            min: number;
            max: number;
          };
        },
      ];
    };
  };
}
