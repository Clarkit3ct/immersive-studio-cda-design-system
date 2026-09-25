import * as React from 'react';

/** Page section: container width, vertical rhythm, optional eyebrow and top hairline. */
export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Uppercase label rendered above the content. */
  eyebrow?: React.ReactNode;
  /** @default "lg" */
  width?: 'sm' | 'md' | 'lg' | 'xl';
  /** "inherit" keeps the parent ground. @default "inherit" */
  tone?: 'inherit' | 'light' | 'dark';
  /** 80 / 128 / 192px of vertical padding. @default "normal" */
  density?: 'tight' | 'normal' | 'loose';
  /** 1px hairline along the top edge. */
  divider?: boolean;
  children?: React.ReactNode;
}
export declare function Section(props: SectionProps): JSX.Element;
