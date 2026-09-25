import React from 'react';
import { Eyebrow } from '../core/Eyebrow.jsx';

export function Card({ eyebrow, title, children, media, interactive, tone = 'raised', style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        background: tone === 'flat' ? 'transparent' : 'var(--surface-raised)',
        border: '1px solid ' + (interactive && hover ? 'var(--border-subtle)' : 'var(--border-hairline)'),
        borderRadius: 'var(--radius-md)', overflow: 'hidden',
        transition: 'border-color var(--duration-fast) var(--ease-standard)',
        ...style
      }} {...rest}
    >
      {media ? <div style={{ background: 'var(--surface-sunken)' }}>{media}</div> : null}
      <div style={{ padding: 'var(--space-8)' }}>
        {eyebrow ? <Eyebrow style={{ marginBottom: 'var(--space-4)' }}>{eyebrow}</Eyebrow> : null}
        {title ? <div style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-regular)', letterSpacing: 'var(--tracking-heading)', lineHeight: 'var(--leading-heading)' }}>{title}</div> : null}
        {children ? <div style={{ marginTop: title ? 'var(--space-4)' : 0, fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-body)', color: 'var(--text-secondary)' }}>{children}</div> : null}
      </div>
    </div>
  );
}
