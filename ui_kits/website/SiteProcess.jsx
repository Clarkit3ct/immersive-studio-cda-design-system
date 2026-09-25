import React from 'react';
import { Section } from '../../components/layout/Section.jsx';
import { StepItem } from '../../components/content/StepItem.jsx';

const STEPS = [
  ['01', 'Upload', 'Send your drawings. We handle the projection-ready prep.'],
  ['02', 'Project', 'The plan is projected on the floor. Elevations take the wall.'],
  ['03', 'Walk', 'Your client stands in the space and feels the design.'],
  ['04', 'Refine', "Changes marked in the room, while they're still inexpensive."],
  ['05', 'Confirm', 'Decisions made before construction, not during.']
];

export function SiteProcess() {
  return (
    <Section eyebrow="How a session works" divider>
      <div style={{ borderBottom: '1px solid var(--border-hairline)' }}>
        {STEPS.map(([n, t, d]) => <StepItem key={n} number={n} title={t}>{d}</StepItem>)}
      </div>
    </Section>
  );
}
