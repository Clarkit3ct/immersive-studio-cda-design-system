Use `Accordion` for the "Questions, answered" pattern.

```jsx
<Accordion defaultOpen={0} items={[
  { q: 'What is Immersive Studio?', a: 'A projection studio where projects are experienced before they’re built.' },
  { q: 'Who is it for?', a: 'Architects, builders, designers, realtors, and developers.' }
]} />
```

Rows are hairlines, not cards. The only affordance is a rotating ↓ in `--text-muted`; the panel opens on a 260ms grid-row transition with no fade.
