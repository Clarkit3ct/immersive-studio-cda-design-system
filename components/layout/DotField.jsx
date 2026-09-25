import React from 'react';

export function DotField({ opacity = 0.5, size = 14, perspective = true, edge = false, children, style, ...rest }) {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', ...style }} {...rest}>
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        color: 'currentColor', opacity,
        backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
        backgroundSize: size + 'px ' + size + 'px',
        maskImage: perspective ? 'linear-gradient(90deg, currentColor 0%, rgba(0,0,0,0.25) 70%, transparent 100%)' : undefined,
        WebkitMaskImage: perspective ? 'linear-gradient(90deg, currentColor 0%, rgba(0,0,0,0.25) 70%, transparent 100%)' : undefined
      }} />
      {edge ? <div aria-hidden="true" style={{
        position: 'absolute', top: 0, bottom: 0, right: 0, width: '1px',
        background: 'var(--off-white)', boxShadow: 'var(--glow-edge)'
      }} /> : null}
      <div style={{ position: 'relative' }}>{children}</div>
    </div>
  );
}
