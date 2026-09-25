import * as React from 'react';

/** A single line icon. Inherits currentColor and never carries color of its own. */
export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  /** One of `Icon.names` / `IconNames`, e.g. "arrow-right", "projector", "hard-hat". */
  name: string;
  /** Square px. 16 / 20 / 24 are the sanctioned steps. @default 20 */
  size?: number;
  /** Override the 1.5 brand stroke. Do not exceed 1.5 without reason. */
  strokeWidth?: number;
  /** Accessible name. Omit for decorative icons — they render aria-hidden. */
  label?: string;
}
export declare function Icon(props: IconProps): JSX.Element;
/** Every icon name available. 46 glyphs, Lucide at stroke-width 1.5. */
export declare namespace Icon { const names: string[] }
/** Same list, as a standalone export. */
export declare const IconNames: string[];
