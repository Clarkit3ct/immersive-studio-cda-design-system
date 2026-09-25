import React from 'react';

export function Eyebrow({ children, as: Tag = 'div', tone = 'secondary', wide, style, ...rest }) {
  return (
    <Tag style={{
      fontFamily: 'var(--font-sans)',
      fontSize: wide ? 'var(--text-sm)' : 'var(--type-eyebrow-size)',
      fontWeight: wide ? 'var(--weight-light)' : 'var(--type-eyebrow-weight)',
      textTransform: 'uppercase',
      letterSpacing: wide ? 'var(--tracking-widest)' : 'var(--type-eyebrow-tracking)',
      color: tone === 'primary' ? 'var(--text-primary)' : 'var(--text-secondary)',
      lineHeight: 1.4,
      ...style
    }} {...rest}>{children}</Tag>
  );
}
