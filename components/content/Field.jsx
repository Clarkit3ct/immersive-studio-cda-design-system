import React from 'react';

export function Field({ label, hint, error, as = 'input', style, inputStyle, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const Tag = as;
  return (
    <label style={{ display: 'block', ...style }}>
      {label ? <span style={{
        display: 'block', marginBottom: 'var(--space-2)',
        fontSize: 'var(--text-2xs)', fontWeight: 'var(--weight-medium)',
        textTransform: 'uppercase', letterSpacing: 'var(--tracking-eyebrow)', color: 'var(--text-secondary)'
      }}>{label}</span> : null}
      <Tag
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          width: '100%', height: as === 'textarea' ? undefined : 'var(--control-h-md)',
          minHeight: as === 'textarea' ? '120px' : undefined,
          padding: as === 'textarea' ? 'var(--space-3) var(--space-4)' : '0 var(--space-4)',
          background: 'var(--surface-raised)', color: 'var(--text-primary)',
          border: '1px solid ' + (error ? 'var(--signal-critical)' : focus ? 'var(--border-strong)' : 'var(--border-subtle)'),
          borderRadius: 'var(--radius-sm)', outline: focus ? '2px solid var(--focus-ring)' : 'none', outlineOffset: '2px',
          fontSize: 'var(--text-sm)', fontFamily: 'var(--font-sans)',
          transition: 'border-color var(--duration-fast) var(--ease-standard)',
          ...inputStyle
        }} {...rest}
      />
      {error || hint ? <span style={{
        display: 'block', marginTop: 'var(--space-2)', fontSize: 'var(--text-xs)',
        color: error ? 'var(--signal-critical)' : 'var(--text-muted)'
      }}>{error || hint}</span> : null}
    </label>
  );
}
