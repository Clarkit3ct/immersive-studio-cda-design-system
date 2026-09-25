import React from 'react';

const files = {
  lockup: { light: 'logo-lockup-black.png', dark: 'logo-lockup-offwhite.png', white: 'logo-lockup-white.png' },
  'lockup-glow': { light: 'logo-lockup-glow-black.png', dark: 'logo-lockup-glow-offwhite.png', white: 'logo-lockup-glow-white.png' },
  mark: { light: 'mark-black.png', dark: 'mark-offwhite.svg', white: 'mark-offwhite.svg' },
  wordmark: { light: 'wordmark-black.svg', dark: 'wordmark-white.svg', white: 'wordmark-white.svg' }
};

export function LogoLockup({ variant = 'lockup', tone = 'dark', height, width = 220, basePath = 'assets/logo', style, ...rest }) {
  const src = basePath.replace(/\/$/, '') + '/' + files[variant][tone];
  return <img src={src} alt="Immersive Studio cda"
    style={{ display: 'block', height: height || 'auto', width: height ? 'auto' : width, ...style }} {...rest} />;
}
