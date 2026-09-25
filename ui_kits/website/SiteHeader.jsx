import React from 'react';
import { Button } from '../../components/core/Button.jsx';
import { LogoLockup } from '../../components/layout/LogoLockup.jsx';

export function SiteHeader({ onJoin, assets = '../../assets/logo' }) {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 20,
      background: 'rgba(10,10,10,.72)', backdropFilter: 'var(--blur-chrome)', WebkitBackdropFilter: 'var(--blur-chrome)',
      borderBottom: '1px solid var(--border-hairline)'
    }}>
      <div style={{
        maxWidth: 'var(--container-lg)', margin: '0 auto',
        padding: 'var(--space-4) var(--gutter-lg)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-6)'
      }}>
        <LogoLockup variant="wordmark" tone="dark" height={26} basePath={assets} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)' }}>
          <a href="#what" style={{
            fontSize: 'var(--text-2xs)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-eyebrow)',
            color: 'var(--text-secondary)', border: 0, whiteSpace: 'nowrap'
          }}>What happens here</a>
          <Button size="sm" onClick={onJoin}>Join the list</Button>
        </div>
      </div>
    </header>
  );
}
