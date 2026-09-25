// Immersive Studio portal loader — framework-agnostic canvas renderer.
// Usage:
//   import { mountImmersiveLoader } from './loader.js';
//   const loader = mountImmersiveLoader(document.querySelector('#logo-box'), {
//     glowColor: '#F7F7F3', speed: 1,
//     hold: false,                      // true = build once, then stay lit (no dissolve loop)
//     staticRender: false,              // true = single fully-built frame, no animation (reduced motion)
//     onPhase: (phase) => {},           // 'build' | 'hold' | 'dissolve' | 'line'
//   });
//   loader.destroy();
// The container should have an explicit size (e.g. clamp(230px,31vw,440px) × clamp(320px,46vh,600px)).
//
// The built state is the confirmed mark (02-BRAND-ASSETS/26-0720-ConfirmedLogo…svg):
// near columns on the LEFT — large dots, wide spacing — receding INTO the bright
// line on the RIGHT. Dot size and brightness run in OPPOSITE directions, so this
// cannot be produced by mirroring the old grid. MARK params + the perspective
// math are ported from the logo generator (CLAUDE-LAB/projects/cda-immersive-logo/
// logo-core.mjs). If the logo changes, regenerate there and update MARK to match.

const MARK = {
  xL: 290, xR: 560, cy: 500, hL: 340, zL: 1.0, zR: 2.0,
  cols: 12, rows: 22, rNear: 6.2, rMin: 0.7, sizeExp: 2.75,
  fieldEnd: 0.88, coreW: 6.5, bleedW: 140, railThick: 2.2, pad: 55,
};
const HFAR = MARK.hL / MARK.zR;

// Perspective projection of quantity q at WORLD fraction u along the wall
// (u=0 near/left, u=1 at the bright edge). Multiply-by-z form — the
// divide-by-z form silently inverts the column bunching.
function persp(u, qL, qR) {
  return ((1 - u) * qL * MARK.zL + u * qR * MARK.zR) / ((1 - u) * MARK.zL + u * MARK.zR);
}
// Half-height of the plane at a given x; the glow's edges ride the rails.
function halfHeightAtX(x) {
  const t = (x - MARK.xL) / (MARK.xR - MARK.xL);
  return MARK.hL + (HFAR - MARK.hL) * t;
}

// Same falloff tables as the SVG's gradients.
const BLEED = [[0, 0], [0.42, 0.025], [0.66, 0.08], [0.84, 0.24], [0.94, 0.58], [1, 1]];
const RAIL = [[0, 0], [0.45, 0.1], [0.75, 0.42], [1, 1]];

const VB = (() => {
  const x = MARK.xL - MARK.rNear - MARK.pad;
  const y = MARK.cy - MARK.hL - MARK.rNear - MARK.pad;
  return { x, y, w: MARK.xR + MARK.pad - x, h: 2 * (MARK.hL + MARK.rNear + MARK.pad) };
})();

export function mountImmersiveLoader(container, opts = {}) {
  const glow = opts.glowColor || '#F5F4EF';
  const speed = opts.speed ?? 1;
  const [gr, gg, gb] = [1, 3, 5].map(i => parseInt(glow.slice(i, i + 2), 16));
  const ink = (a) => `rgba(${gr},${gg},${gb},${a})`;
  const white = (a) => `rgba(255,255,255,${a})`;
  const clamp01 = (n) => Math.max(0, Math.min(1, n));

  const cv = document.createElement('canvas');
  cv.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block;';
  if (getComputedStyle(container).position === 'static') container.style.position = 'relative';
  container.appendChild(cv);

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let ctx, W, H, dots, K, mapX, mapY, lastPhase;

  function buildGrid() {
    const CW = W * dpr, CH = H * dpr, pad = 0.03; // VB already carries the mark's breathing room
    K = Math.min((CW * (1 - 2 * pad)) / VB.w, (CH * (1 - 2 * pad)) / VB.h);
    const cx0 = VB.x + VB.w / 2, cy0 = VB.y + VB.h / 2;
    mapX = (x) => CW / 2 + (x - cx0) * K;
    mapY = (y) => CH / 2 + (y - cy0) * K;
    dots = [];
    for (let i = 0; i < MARK.cols; i++) {
      const u = (i / (MARK.cols - 1)) * MARK.fieldEnd;
      const x = persp(u, MARK.xL, MARK.xR);
      const h = persp(u, MARK.hL, HFAR);
      const r = Math.max(MARK.rMin, MARK.rNear * Math.pow(h / MARK.hL, MARK.sizeExp));
      for (let j = 0; j < MARK.rows; j++) {
        const v = j / (MARK.rows - 1);
        dots.push({ u, v, i, j, X: mapX(x), Y: mapY(MARK.cy + h * (2 * v - 1)), R: r * K, rand: Math.random() });
      }
    }
  }

  function resize() {
    const r = container.getBoundingClientRect();
    W = Math.max(1, r.width); H = Math.max(1, r.height);
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    ctx = cv.getContext('2d');
    buildGrid();
    if (opts.staticRender) raf = requestAnimationFrame(loop);
  }

  const start = performance.now();
  let raf;
  function loop(now) {
    if (!opts.staticRender) raf = requestAnimationFrame(loop);
    if (!ctx || !dots) return;
    const t = opts.staticRender ? 4.0 : ((now - start) / 1000) * speed;
    const CW = W * dpr, CH = H * dpr;
    ctx.clearRect(0, 0, CW, CH);

    // phases: build 2.5 / hold 6 / dissolve 2.2 / line 0.9  (seconds at speed 1)
    const tB = 2.5, tH = 6.0, tD = 2.2, tL = 0.9, T = tB + tH + tD + tL;
    // hold mode: play build once, then park mid-hold forever (shimmer/twinkle keep
    // running off t; dissolve never triggers) — the coming-soon integration.
    const lt = (opts.hold || opts.staticRender) ? Math.min(t, tB + 1.0) : t % T;
    let buildAmt = 1, dissolve = 0, phase;
    if (lt < tB) { phase = 'build'; buildAmt = lt / tB; }
    else if (lt < tB + tH) { phase = 'hold'; }
    else if (lt < tB + tH + tD) { phase = 'dissolve'; dissolve = (lt - tB - tH) / tD; }
    else { phase = 'line'; dissolve = 1; }
    if (phase !== lastPhase) { lastPhase = phase; opts.onPhase && opts.onPhase(phase); }

    const built = 1 - Math.pow(1 - buildAmt, 3);
    const front = built * 1.2;                       // reveal sweep: near/left → into the light
    const bloomAmt = built * (1 - dissolve * 0.7);
    const frameA = clamp01((lt - 0.8) / 1.7);        // rails + bleed grow in behind the sweep

    // canvas-space anchors
    const xLc = mapX(MARK.xL), xRc = mapX(MARK.xR), cyc = mapY(MARK.cy);
    const hFc = HFAR * K, hLc = MARK.hL * K;

    // ambient bloom radiating from the bright line — slow breath keeps the
    // held state alive
    const breath = 0.88 + 0.12 * Math.sin(t * 0.7);
    const bgG = ctx.createRadialGradient(xRc, cyc, 0, xRc, cyc, CW * 0.6);
    bgG.addColorStop(0, ink(0.14 * bloomAmt * breath));
    bgG.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = bgG; ctx.fillRect(0, 0, CW, CH);

    // dot field — crisp like the vector; life comes from a slow traveling
    // shimmer + per-dot twinkle around a near-solid base
    for (const p of dots) {
      const rev = clamp01((front - p.u) / 0.14);
      if (rev <= 0) continue;
      let out = 0;
      if (dissolve > 0) {
        const dotStart = (1 - p.u) * 0.62 + p.rand * 0.32; // line-side dots go first
        out = clamp01((dissolve - dotStart) / 0.16);
      }
      if (rev * (1 - out) <= 0) continue;
      const wave = Math.sin(p.u * 3.4 - t * 1.6) * 0.5 + 0.5;
      const wave2 = Math.sin(p.v * 2.0 + p.u * 2.0 - t * 0.9) * 0.5 + 0.5;
      const twk = 0.85 + 0.15 * Math.sin(t * 2.3 + p.i * 1.7 + p.j * 0.9);
      let a = (0.60 + 0.34 * wave) * twk * rev * (1 - out);
      a += wave * wave2 * 0.42 * rev * (1 - out);
      a = Math.min(1, a);
      const rad = Math.max(0.5, p.R * (0.4 + 0.6 * rev) * (0.35 + 0.65 * (1 - out)));
      const nearness = 1 - p.u / MARK.fieldEnd; // 1 at the big columns
      if (nearness > 0.45) {
        ctx.shadowColor = ink(a);
        ctx.shadowBlur = (2 + nearness * 9) * dpr * (0.5 + 0.5 * wave);
      } else ctx.shadowBlur = 0;
      ctx.beginPath();
      ctx.arc(p.X, p.Y, rad, 0, Math.PI * 2);
      ctx.fillStyle = ink(a);
      ctx.fill();
    }
    ctx.shadowBlur = 0;

    // perspective rails — full weight at the line, tapering to the near corner
    const railEnv = frameA * (1 - dissolve);
    if (railEnv > 0.004) {
      const g = ctx.createLinearGradient(xLc, 0, xRc, 0);
      for (const [o, a] of RAIL) g.addColorStop(o, ink(a * railEnv));
      const th = MARK.railThick * K;
      for (const sgn of [-1, 1]) {
        const yF = cyc + sgn * hFc, yN = cyc + sgn * hLc;
        ctx.beginPath();
        ctx.moveTo(xRc, yF - th); ctx.lineTo(xRc, yF + th); ctx.lineTo(xLc, yN);
        ctx.closePath();
        ctx.fillStyle = g; ctx.fill();
      }
    }

    // leftward bleed — a trapezoid riding the rails, never spilling right
    const bleedEnv = frameA * (1 - dissolve * 0.7) * (0.9 + 0.1 * Math.sin(t * 0.8));
    if (bleedEnv > 0.004) {
      const bxc = mapX(MARK.xR - MARK.bleedW);
      const hbc = halfHeightAtX(MARK.xR - MARK.bleedW) * K;
      const g = ctx.createLinearGradient(bxc, 0, xRc, 0);
      for (const [o, a] of BLEED) g.addColorStop(o, white(a * bleedEnv));
      ctx.beginPath();
      ctx.moveTo(bxc, cyc - hbc); ctx.lineTo(xRc, cyc - hFc);
      ctx.lineTo(xRc, cyc + hFc); ctx.lineTo(bxc, cyc + hbc);
      ctx.closePath();
      ctx.fillStyle = g; ctx.fill();
    }

    // the bright line — lit from frame one, persists through dissolve + line
    // phases (the loop seed), gentle pulse so the hold state stays alive
    const coreA = 0.92 + 0.08 * Math.sin(t * 1.4);
    const cw = Math.max(1.5, MARK.coreW * K);
    ctx.shadowColor = white(0.9 * coreA);
    ctx.shadowBlur = (8 + 14 * bloomAmt) * dpr;
    ctx.fillStyle = white(coreA);
    ctx.fillRect(xRc - cw, cyc - hFc, cw, 2 * hFc);
    ctx.shadowBlur = 0;
  }

  const ro = new ResizeObserver(resize);
  ro.observe(container);
  resize();
  raf = requestAnimationFrame(loop);

  return {
    destroy() { cancelAnimationFrame(raf); ro.disconnect(); cv.remove(); },
    canvas: cv,
  };
}
