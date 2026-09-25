import * as React from 'react';

/** Flat content container: hairline border, 4px radius, no shadow. */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  /** Image or render placed flush at the top. */
  media?: React.ReactNode;
  /** Darkens the hairline on hover. */
  interactive?: boolean;
  /** "flat" drops the surface fill and keeps only the border. @default "raised" */
  tone?: 'raised' | 'flat';
  children?: React.ReactNode;
}
export declare function Card(props: CardProps): JSX.Element;
