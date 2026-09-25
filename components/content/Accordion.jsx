import React from 'react';

export function Accordion({ items = [], defaultOpen = -1, style, ...rest }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div style={{ borderTop: '1px solid var(--border-hairline)', ...style }} {...rest}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={{ borderBottom: '1px solid var(--border-hairline)' }}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                gap: 'var(--space-6)', padding: 'var(--space-6) 0', background: 'transparent',
                border: 0, cursor: 'pointer', textAlign: 'left',
                fontSize: 'var(--text-md)', fontWeight: 'var(--weight-regular)',
                letterSpacing: 'var(--tracking-heading)', color: 'var(--text-primary)'
              }}
            >
              <span>{item.q}</span>
              <span aria-hidden="true" style={{
                color: 'var(--text-muted)', fontSize: 'var(--text-lg)', lineHeight: 1,
                transform: isOpen ? 'rotate(180deg)' : 'none',
                transition: 'transform var(--duration-base) var(--ease-standard)'
              }}>{'\u2193'}</span>
            </button>
            <div style={{
              display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr',
              transition: 'grid-template-rows var(--duration-base) var(--ease-standard)'
            }}>
              <div style={{ overflow: 'hidden' }}>
                <div style={{
                  paddingBottom: 'var(--space-8)', maxWidth: 'var(--measure)',
                  fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-body)', color: 'var(--text-secondary)'
                }}>{item.a}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
