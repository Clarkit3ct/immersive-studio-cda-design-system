import React from 'react';
import { Button } from '../../components/core/Button.jsx';
import { Eyebrow } from '../../components/core/Eyebrow.jsx';
import { DotField } from '../../components/layout/DotField.jsx';
import { LogoLockup } from '../../components/layout/LogoLockup.jsx';

export function SiteHero({ onJoin, assets = '../../assets/logo' }) {
  return (
    <DotField opacity={0.07} edge style={{ background: 'var(--void)', borderBottom: '1px solid var(--border-hairline)' }}>
      <div style={{
        maxWidth: 'var(--container-lg)', margin: '0 auto',
        padding: 'var(--section-y-loose) var(--gutter-lg)',
        minHeight: '68vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'
      }}>
        <LogoLockup variant="lockup-glow" tone="dark" width={520} basePath={assets} style={{ marginLeft: '-2%', marginBottom: 'var(--space-10)' }} />
        <p style={{
          fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-light)', lineHeight: 'var(--leading-body)',
          color: 'var(--text-secondary)', maxWidth: '52ch', margin: '0 0 var(--space-12)'
        }}>
          An immersive design experience for architects, builders, designers, and creatives.
          Coming this summer to downtown Coeur d'Alene.
        </p>
        <Eyebrow style={{ marginBottom: 'var(--space-6)' }}>Coming Soon</Eyebrow>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)', flexWrap: 'wrap' }}>
          <Button size="lg" onClick={onJoin}>Be the first. Join the list</Button>
          <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>Founding spots are limited.</span>
        </div>
        <div style={{ marginTop: 'var(--space-16)' }}>
          <Button variant="link" href="#what" arrow="down" style={{ fontSize: 'var(--text-2xs)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-eyebrow)', color: 'var(--text-secondary)' }}>
            What happens here
          </Button>
        </div>
      </div>
    </DotField>
  );
}
