import * as React from 'react';

/** One numbered step in a process list. Numbers are zero-padded: 01–05. */
export interface StepItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Zero-padded ordinal, e.g. "01". */
  number: React.ReactNode;
  title: React.ReactNode;
  /** "column" stacks the number above the title for narrow grids. @default "row" */
  layout?: 'row' | 'column';
  children?: React.ReactNode;
}
export declare function StepItem(props: StepItemProps): JSX.Element;
