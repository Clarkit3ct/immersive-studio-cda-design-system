import * as React from 'react';

/** Labelled text input or textarea. The waitlist form is the brand's only form today. */
export interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  /** Replaces hint and turns the border critical. */
  error?: React.ReactNode;
  /** @default "input" */
  as?: 'input' | 'textarea' | 'select';
  inputStyle?: React.CSSProperties;
}
export declare function Field(props: FieldProps): JSX.Element;
