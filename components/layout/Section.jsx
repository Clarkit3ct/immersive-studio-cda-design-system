import React from 'react';
import { Eyebrow } from '../core/Eyebrow.jsx';

const widths = { sm: 'var(--container-sm)', md: 'var(--container-md)', lg: 'var(--container-lg)', xl: 'var(--container-xl)' };

export function Section({ eyebrow, width = 'lg', tone = 'inherit', density = 'normal', divider, children, style, ...rest }) {
  const pad = { tight: 'var(--section-y-tight)', normal: 'var(--section-y)', loose: 'var(--section-y-loose)' }[density];
  return (
    <section
      data-theme={tone === 'dark' ? 'dark' : tone === 'light' ? undefined : undefined}
      style={{
        background: tone === 'inherit' ? 'transparent' : 'var(--surface-page)',
        color: tone === 'inherit' ? 'inherit' : 'var(--text-primary)',
        borderTop: divider ? '1px solid var(--border-hairline)' : 'none',
        paddingTop: pad, paddingBottom: pad, ...style
      }} {...rest}
    >
      <div style={{ maxWidth: widths[width], margin: '0 auto', paddingLeft: 'var(--gutter-lg)', paddingRight: 'var(--gutter-lg)' }}>
        {eyebrow ? <Eyebrow style={{ marginBottom: 'var(--space-8)' }}>{eyebrow}</Eyebrow> : null}
        {children}
      </div>
    </section>
  );
}
