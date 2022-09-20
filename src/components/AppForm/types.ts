import { FormHTMLAttributes } from 'react';

interface SubmitFormLink {
  title: string;
  text: string;
  link: string;
}

export interface AppFormProps extends FormHTMLAttributes<HTMLFormElement> {
  title: string;
  link?: SubmitFormLink;
}
