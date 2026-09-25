import React from 'react';

export function Stat({ value, label, size = 'md', style, ...rest }) {
  const sizes = { sm: 'var(--text-3xl)', md: 'var(--text-4xl)', lg: 'var(--text-5xl)' };
  return (
    <div style={{ ...style }} {...rest}>
      <div style={{
        fontSize: sizes[size], fontWeight: 'var(--type-numeral-weight)',
        letterSpacing: 'var(--tracking-display)', lineHeight: 1, color: 'var(--text-primary)',
        whiteSpace: 'nowrap'
      }}>{value}</div>
      <div style={{
        marginTop: 'var(--space-4)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-body)',
        color: 'var(--text-secondary)', maxWidth: '26ch'
      }}>{label}</div>
    </div>
  );
}
