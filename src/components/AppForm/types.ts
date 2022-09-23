import { FormHTMLAttributes } from 'react';

export interface AppFormProps extends FormHTMLAttributes<HTMLFormElement> {
  title: string | '';
}
