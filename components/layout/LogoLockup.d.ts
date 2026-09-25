import * as React from 'react';

/**
 * The supplied logo artwork. Never redraw the mark — always render these files.
 * @startingPoint section="Brand" subtitle="Lockup, mark and wordmark in every supplied tone" viewport="700x230"
 */
export interface LogoLockupProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** @default "lockup" */
  variant?: 'lockup' | 'lockup-glow' | 'mark' | 'wordmark';
  /** Which artwork colorway. "dark" means for use on a dark ground. @default "dark" */
  tone?: 'light' | 'dark' | 'white';
  /** Fixes height and lets width follow. */
  height?: number | string;
  /** Used when height is not set. @default 220 */
  width?: number | string;
  /** Path from the rendering page to assets/logo. @default "assets/logo" */
  basePath?: string;
}
export declare function LogoLockup(props: LogoLockupProps): JSX.Element;
