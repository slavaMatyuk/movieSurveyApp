export interface SubmitResponse {
  data: {
    type: string;
    id: string;
    attributes: {
      answers: [
        {
          questionId: string;
          answer: string;
        },
        {
          questionId: string;
          answer: number;
        },
      ];
    };
    relationships: {
      survey: {
        data: {
          type: string;
          id: string;
        };
      };
    };
  };
}
