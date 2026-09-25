import React from 'react';
import { Button } from '../../components/core/Button.jsx';
import { DotField } from '../../components/layout/DotField.jsx';

export function SiteCta({ onJoin }) {
  return (
    <DotField opacity={0.06} style={{ background: 'var(--void)', borderTop: '1px solid var(--border-hairline)' }}>
      <div style={{ maxWidth: 'var(--container-lg)', margin: '0 auto', padding: 'var(--section-y-loose) var(--gutter-lg)' }}>
        <h2 style={{
          fontSize: 'var(--text-4xl)', fontWeight: 'var(--weight-light)', lineHeight: 'var(--leading-tight)',
          letterSpacing: 'var(--tracking-display)', maxWidth: '16ch', margin: 0
        }}>
          The room does the talking. <strong style={{ fontWeight: 'var(--weight-bold)' }}>Be there first.</strong>
        </h2>
        <div style={{ marginTop: 'var(--space-12)', display: 'flex', alignItems: 'center', gap: 'var(--space-8)', flexWrap: 'wrap' }}>
          <Button size="lg" onClick={onJoin}>Join the list</Button>
          <Button variant="link" href="https://www.instagram.com/immersivestudiocda/" arrow="right">
            Just curious? Follow the build @immersivestudiocda
          </Button>
        </div>
        <p style={{ marginTop: 'var(--space-10)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
          Seven founding spots. Downtown Coeur d'Alene.
        </p>
      </div>
    </DotField>
  );
}
