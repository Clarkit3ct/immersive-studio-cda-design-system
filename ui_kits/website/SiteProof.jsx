import React from 'react';
import { Section } from '../../components/layout/Section.jsx';
import { Stat } from '../../components/core/Stat.jsx';

export function SiteProof() {
  return (
    <Section density="tight">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-12)' }}>
        <Stat size="sm" value="1:1" label="True-scale floor and elevation projection" />
        <Stat size="sm" value="Any size" label="Your plan panned across 2,800± sq ft of floor" />
        <Stat size="sm" value="$5K to $25K" label="Typical cost of one field change order" />
      </div>
    </Section>
  );
}
