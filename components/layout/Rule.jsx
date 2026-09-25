import React from 'react';

export function Rule({ tone = 'hairline', vertical, style, ...rest }) {
  const color = tone === 'strong' ? 'var(--border-strong)' : tone === 'subtle' ? 'var(--border-subtle)' : 'var(--border-hairline)';
  return <div role="separator" style={vertical
    ? { width: '1px', alignSelf: 'stretch', background: color, ...style }
    : { height: '1px', width: '100%', background: color, border: 0, ...style }} {...rest} />;
}
