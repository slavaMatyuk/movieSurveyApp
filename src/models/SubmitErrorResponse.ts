export interface SubmitErrorResponse {
  errors: [
    {
      source: { pointer: string };
      detail: string;
    },
    {
      source: { pointer: string };
      detail: string;
    },
  ];
}
