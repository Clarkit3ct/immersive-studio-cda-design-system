import React from 'react';
import { Section } from '../../components/layout/Section.jsx';
import { Accordion } from '../../components/content/Accordion.jsx';

const ITEMS = [
  {
    q: 'What is Immersive Studio?',
    a: "A projection studio where projects are experienced before they're built. Your floor plan is projected at true 1:1 scale and you walk the space room by room. The decisions that usually wait for framing get made in the room instead, while changes are still inexpensive."
  },
  {
    q: 'Who is it for?',
    a: 'Architects, builders, designers, realtors, and developers. Anyone whose clients struggle to picture a space from drawings. If approvals drag and change orders sting, this room is for you.'
  },
  {
    q: 'How do I get in early?',
    a: 'Seven founding memberships open before opening day: first access to the floor, your firm on the founding wall. Join the list.'
  }
];

export function SiteFaq() {
  return (
    <Section eyebrow="Questions, answered" width="md" divider>
      <Accordion items={ITEMS} defaultOpen={0} />
    </Section>
  );
}
