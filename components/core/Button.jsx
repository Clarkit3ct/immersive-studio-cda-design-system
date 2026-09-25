import React from 'react';

const base = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-3)',
  fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-medium)',
  letterSpacing: '0.04em', textDecoration: 'none', whiteSpace: 'nowrap',
  border: '1px solid transparent', borderRadius: 'var(--radius-sm)', cursor: 'pointer',
  transition: 'background-color var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)'
};

const sizes = {
  sm: { height: 'var(--control-h-sm)', padding: '0 var(--control-pad-x-sm)', fontSize: 'var(--text-xs)' },
  md: { height: 'var(--control-h-md)', padding: '0 var(--control-pad-x-md)', fontSize: 'var(--text-sm)' },
  lg: { height: 'var(--control-h-lg)', padding: '0 var(--control-pad-x-lg)', fontSize: 'var(--text-base)' }
};

const variants = {
  solid: { background: 'var(--accent)', color: 'var(--text-on-accent)' },
  outline: { background: 'transparent', color: 'var(--text-primary)', borderColor: 'var(--border-subtle)' },
  ghost: { background: 'transparent', color: 'var(--text-primary)' },
  link: { background: 'transparent', color: 'var(--text-primary)', height: 'auto', padding: 0, borderRadius: 0, borderBottom: '1px solid var(--border-subtle)', paddingBottom: '3px' }
};

const hovers = {
  solid: { background: 'var(--accent-hover)' },
  outline: { borderColor: 'var(--border-strong)' },
  ghost: { background: 'var(--accent-quiet)' },
  link: { borderBottomColor: 'var(--border-strong)' }
};

export function Button({ variant = 'solid', size = 'md', href, arrow, disabled, fullWidth, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  const s = {
    ...base, ...sizes[size], ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...(fullWidth ? { width: '100%' } : null),
    ...(disabled ? { opacity: 0.4, pointerEvents: 'none' } : null),
    ...style
  };
  return (
    <Tag
      href={href} disabled={!href && disabled ? true : undefined} style={s}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} {...rest}
    >
      {children}
      {arrow ? <span aria-hidden="true" style={{ fontWeight: 'var(--weight-regular)' }}>{arrow === 'down' ? '\u2193' : '\u2192'}</span> : null}
    </Tag>
  );
}
