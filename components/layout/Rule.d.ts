import * as React from 'react';

/** A 1px hairline. The system's main separator — used instead of boxes. */
export interface RuleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default "hairline" */
  tone?: 'hairline' | 'subtle' | 'strong';
  vertical?: boolean;
}
export declare function Rule(props: RuleProps): JSX.Element;
