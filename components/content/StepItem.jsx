import React from 'react';

export function StepItem({ number, title, children, layout = 'row', style, ...rest }) {
  const row = layout === 'row';
  return (
    <div style={{
      display: row ? 'grid' : 'block',
      gridTemplateColumns: row ? '96px 1fr' : undefined,
      gap: row ? 'var(--space-8)' : undefined,
      padding: 'var(--space-8) 0',
      borderTop: '1px solid var(--border-hairline)',
      ...style
    }} {...rest}>
      <div style={{
        fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-extralight)',
        letterSpacing: 'var(--tracking-display)', lineHeight: 1, color: 'var(--text-muted)'
      }}>{number}</div>
      <div style={{ marginTop: row ? 0 : 'var(--space-6)' }}>
        <div style={{ fontSize: 'var(--text-lg)', letterSpacing: 'var(--tracking-heading)' }}>{title}</div>
        <div style={{ marginTop: 'var(--space-3)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-body)', color: 'var(--text-secondary)', maxWidth: '48ch' }}>{children}</div>
      </div>
    </div>
  );
}
