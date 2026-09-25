Use `Button` for any action; `variant="solid"` is reserved for the single primary action on a screen, everything else is outline, ghost or link.

```jsx
<Button size="lg" href="https://tally.so/r/b5yBV0">Join the list</Button>
<Button variant="link" arrow="right">Follow the build</Button>
<Button variant="outline" arrow="down">What happens here</Button>
```

Variants: `solid` (accent ground, inverted text), `outline` (hairline that darkens on hover), `ghost` (tint on hover), `link` (underline rule, no box). Sizes `sm` 34px / `md` 44px / `lg` 56px. `arrow` adds → or ↓ — the brand's only glyphs. Nothing scales or bounces on press; color deepens and that is all.
