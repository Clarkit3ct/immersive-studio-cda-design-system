import React from 'react';
import { Section } from '../../components/layout/Section.jsx';

const USES = [
  "See the design with a client before it's real.",
  'Walk your future home before it\u2019s framed.',
  "Sell the units before they're built.",
  'Preview a buildout before you sign the lease.',
  'Host an immersive event inside the plan.',
  'Throw a party the whole floor lights up for.',
  'Launch a product in a room built for the reveal.'
];

export function SiteUseCases() {
  const [active, setActive] = React.useState(0);
  return (
    <Section eyebrow="More than one use" divider>
      <div style={{ borderTop: '1px solid var(--border-hairline)' }}>
        {USES.map((u, i) => (
          <div
            key={u}
            onMouseEnter={() => setActive(i)}
            style={{
              display: 'flex', alignItems: 'baseline', gap: 'var(--space-8)',
              padding: 'var(--space-6) 0', borderBottom: '1px solid var(--border-hairline)',
              color: active === i ? 'var(--text-primary)' : 'var(--text-secondary)',
              transition: 'color var(--duration-fast) var(--ease-standard)', cursor: 'default'
            }}
          >
            <span style={{ fontSize: 'var(--text-2xs)', color: 'var(--text-muted)', letterSpacing: 'var(--tracking-wide)', width: 28 }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <span style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-light)', letterSpacing: 'var(--tracking-heading)' }}>{u}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
