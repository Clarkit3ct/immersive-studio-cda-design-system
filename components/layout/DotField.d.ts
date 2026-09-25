import * as React from 'react';

/**
 * The brand mark's dot grid as a background. Use on dark grounds only.
 * @startingPoint section="Layout" subtitle="Dot-grid ground with the projected lit edge" viewport="700x220"
 */
export interface DotFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Dot opacity. Keep low: 0.04–0.1 behind content. @default 0.5 */
  opacity?: number;
  /** Grid pitch in px. @default 14 */
  size?: number;
  /** Fade the field left-to-right the way the mark recedes. @default true */
  perspective?: boolean;
  /** Draw the lit projection edge down the right side. */
  edge?: boolean;
  children?: React.ReactNode;
}
export declare function DotField(props: DotFieldProps): JSX.Element;
