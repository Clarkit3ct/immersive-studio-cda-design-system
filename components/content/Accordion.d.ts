import * as React from 'react';

export interface AccordionItem { q: React.ReactNode; a: React.ReactNode }

/** Hairline-separated question list. One panel open at a time. */
export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: AccordionItem[];
  /** Index open on mount; -1 for all closed. @default -1 */
  defaultOpen?: number;
}
export declare function Accordion(props: AccordionProps): JSX.Element;
