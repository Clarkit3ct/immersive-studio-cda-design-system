Use `LogoLockup` anywhere the brand signs a page. It renders the supplied artwork; the mark must never be redrawn in code.

```jsx
<LogoLockup variant="lockup" tone="dark" width={200} basePath="../../assets/logo" />
<LogoLockup variant="mark" tone="light" height={40} basePath="../../assets/logo" />
```

`tone="dark"` means artwork *for* a dark ground (off-white ink). Use `lockup-glow` only on Void, where the glow has room to fall off. Set `basePath` to the relative path from the page to `assets/logo`.
