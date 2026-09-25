import * as React from 'react';

/**
 * Primary action control. Solid is the one loud element on a screen — one per view.
 * @startingPoint section="Core" subtitle="Solid, outline, ghost and link buttons" viewport="700x200"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual weight. @default "solid" */
  variant?: 'solid' | 'outline' | 'ghost' | 'link';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Renders an <a> instead of a <button>. */
  href?: string;
  /** Appends a unicode arrow glyph. The brand uses no icon library. */
  arrow?: 'right' | 'down';
  disabled?: boolean;
  fullWidth?: boolean;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
