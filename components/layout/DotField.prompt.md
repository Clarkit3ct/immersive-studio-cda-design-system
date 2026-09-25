Use `DotField` when a dark section needs texture instead of a photograph — it is the brand mark rendered as a ground.

```jsx
<DotField opacity={0.06} edge style={{ background: 'var(--void)', minHeight: 420 }}>
  <h1>Step inside your project <strong>before it exists.</strong></h1>
</DotField>
```

Behind content, opacity belongs between 0.04 and 0.10. `edge` adds the glowing projection edge and should appear once per page at most.
