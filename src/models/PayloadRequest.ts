export interface PayloadRequest {
  data: {
    type: string;
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
  };
}
