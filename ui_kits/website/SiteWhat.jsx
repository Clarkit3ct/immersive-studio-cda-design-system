import React from 'react';
import { Section } from '../../components/layout/Section.jsx';
import { DotField } from '../../components/layout/DotField.jsx';

export function SiteWhat() {
  return (
    <Section id="what" eyebrow="What happens here" density="normal">
      <h2 style={{
        fontSize: 'var(--text-4xl)', fontWeight: 'var(--weight-light)', lineHeight: 'var(--leading-tight)',
        letterSpacing: 'var(--tracking-display)', maxWidth: '18ch', margin: 0
      }}>
        Step inside your project <strong style={{ fontWeight: 'var(--weight-bold)' }}>before it exists.</strong>
      </h2>
      <p style={{
        marginTop: 'var(--space-8)', maxWidth: '58ch', fontSize: 'var(--text-md)',
        lineHeight: 'var(--leading-body)', color: 'var(--text-secondary)'
      }}>
        A projection studio in downtown Coeur d'Alene. Your floor plan is projected at{' '}
        <strong style={{ color: 'var(--text-primary)', fontWeight: 'var(--weight-semibold)' }}>true 1:1 scale</strong>,
        your elevations on the wall, and your client walking the design with you when changes are still inexpensive.
      </p>

      <figure style={{ margin: 'var(--space-16) 0 0' }}>
        <DotField opacity={0.09} edge style={{
          background: 'var(--surface-sunken)', border: '1px solid var(--border-hairline)',
          borderRadius: 'var(--radius-md)', aspectRatio: '16 / 7',
          display: 'grid', placeItems: 'center'
        }}>
          <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: 'var(--space-8)' }}>
            <div style={{ fontSize: 'var(--text-2xs)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-eyebrow)' }}>
              Image not supplied with the brand kit
            </div>
            <div style={{ marginTop: 'var(--space-3)', fontSize: 'var(--text-sm)', maxWidth: '44ch' }}>
              The live site places its concept render of the studio floor here.
            </div>
          </div>
        </DotField>
        <figcaption style={{
          marginTop: 'var(--space-4)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)',
          fontStyle: 'italic'
        }}>Concept render · the studio floor at 1:1</figcaption>
      </figure>
    </Section>
  );
}
