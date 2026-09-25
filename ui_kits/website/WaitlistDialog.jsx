import React from 'react';
import { Button } from '../../components/core/Button.jsx';
import { Eyebrow } from '../../components/core/Eyebrow.jsx';
import { Field } from '../../components/content/Field.jsx';

export function WaitlistDialog({ open, onClose }) {
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => { if (open) setSent(false); }, [open]);
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 50, background: 'var(--surface-scrim)',
        backdropFilter: 'var(--blur-scrim)', WebkitBackdropFilter: 'var(--blur-scrim)',
        display: 'grid', placeItems: 'center', padding: 'var(--space-6)'
      }}
    >
      <div
        onClick={e => e.stopPropagation()} role="dialog" aria-modal="true"
        style={{
          width: 'min(520px, 100%)', background: 'var(--surface-raised)',
          border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-overlay)', padding: 'var(--space-10)'
        }}
      >
        {sent ? (
          <div>
            <Eyebrow>You're on the list</Eyebrow>
            <p style={{ marginTop: 'var(--space-6)', fontSize: 'var(--text-md)', lineHeight: 'var(--leading-body)' }}>
              We'll write when the floor is ready to walk. Seven founding spots.
            </p>
            <Button variant="outline" onClick={onClose} style={{ marginTop: 'var(--space-6)' }}>Close</Button>
          </div>
        ) : (
          <form onSubmit={e => { e.preventDefault(); setSent(true); }}>
            <Eyebrow>Founding spots are limited</Eyebrow>
            <h3 style={{
              marginTop: 'var(--space-4)', fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-light)',
              letterSpacing: 'var(--tracking-heading)'
            }}>Be the first inside.</h3>
            <div style={{ display: 'grid', gap: 'var(--space-5)', marginTop: 'var(--space-8)' }}>
              <Field label="Name" placeholder="Jeremy Decker" required />
              <Field label="Email" type="email" placeholder="you@studio.com" required />
              <Field label="Project" as="textarea" placeholder="Where is it in the design process?" hint="Optional. It helps us prepare." />
            </div>
            <div style={{ display: 'flex', gap: 'var(--space-4)', marginTop: 'var(--space-8)' }}>
              <Button type="submit" fullWidth>Join the list</Button>
              <Button type="button" variant="ghost" onClick={onClose}>Cancel</Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
