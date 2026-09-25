import React from 'react';

export function Tag({ children, tone = 'neutral', style, ...rest }) {
  const tones = {
    neutral: { background: 'var(--accent-quiet)', color: 'var(--text-secondary)', borderColor: 'transparent' },
    outline: { background: 'transparent', color: 'var(--text-secondary)', borderColor: 'var(--border-subtle)' },
    solid: { background: 'var(--accent)', color: 'var(--text-on-accent)', borderColor: 'transparent' }
  };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', height: '26px', padding: '0 var(--space-3)',
      border: '1px solid', borderRadius: 'var(--radius-pill)',
      fontSize: 'var(--text-3xs)', fontWeight: 'var(--weight-medium)',
      textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)',
      ...tones[tone], ...style
    }} {...rest}>{children}</span>
  );
}
