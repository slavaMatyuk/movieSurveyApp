export interface ServerErrorResponse {
  errors: [
    {
      title: string;
      detail: string;
    },
  ];
}
