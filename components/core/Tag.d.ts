import * as React from 'react';

/** Small pill label — status, category, or a "coming soon" marker. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "neutral" */
  tone?: 'neutral' | 'outline' | 'solid';
  children?: React.ReactNode;
}
export declare function Tag(props: TagProps): JSX.Element;
