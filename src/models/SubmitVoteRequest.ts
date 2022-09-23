export interface SubmitVoteRequest {
  data: {
    type: string;
    attributes: {
      answers: {
        questionId: string;
        answer: string;
      }[];
    };
  };
  id: string;
}
