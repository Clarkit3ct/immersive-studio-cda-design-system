import * as React from 'react';

/** Small uppercase label that sits above a section headline. */
export interface EyebrowProps extends React.HTMLAttributes<HTMLElement> {
  /** @default "div" */
  as?: keyof JSX.IntrinsicElements;
  /** @default "secondary" */
  tone?: 'primary' | 'secondary';
  /** Use the 0.42em business-card tracking instead of 0.18em. */
  wide?: boolean;
  children?: React.ReactNode;
}
export declare function Eyebrow(props: EyebrowProps): JSX.Element;
