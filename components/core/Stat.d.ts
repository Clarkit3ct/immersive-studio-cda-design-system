import * as React from 'react';

/** A single large figure with a one-line explanation beneath it. */
export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The figure. Keep it as a numeral: "1:1", "$5K to $25K", "2,800± sq ft". */
  value: React.ReactNode;
  label: React.ReactNode;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
}
export declare function Stat(props: StatProps): JSX.Element;
