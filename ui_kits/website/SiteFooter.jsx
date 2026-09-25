import React from 'react';
import { LogoLockup } from '../../components/layout/LogoLockup.jsx';

export function SiteFooter({ assets = '../../assets/logo' }) {
  return (
    <footer style={{ borderTop: '1px solid var(--border-hairline)', background: 'var(--surface-sunken)' }}>
      <div style={{
        maxWidth: 'var(--container-lg)', margin: '0 auto', padding: 'var(--space-12) var(--gutter-lg)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-8)', flexWrap: 'wrap'
      }}>
        <LogoLockup variant="wordmark" tone="dark" width={160} basePath={assets} />
        <div style={{ display: 'flex', gap: 'var(--space-8)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', flexWrap: 'wrap' }}>
          <a href="mailto:contact@immersivestudiocda.com">contact@immersivestudiocda.com</a>
          <span>Downtown Coeur d'Alene, Idaho</span>
        </div>
      </div>
    </footer>
  );
}
