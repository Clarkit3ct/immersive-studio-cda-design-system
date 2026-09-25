import React from 'react';
import { SiteHeader } from './SiteHeader.jsx';
import { SiteHero } from './SiteHero.jsx';
import { SiteWhat } from './SiteWhat.jsx';
import { SiteProcess } from './SiteProcess.jsx';
import { SiteProof } from './SiteProof.jsx';
import { SiteFaq } from './SiteFaq.jsx';
import { SiteUseCases } from './SiteUseCases.jsx';
import { SiteCta } from './SiteCta.jsx';
import { SiteFooter } from './SiteFooter.jsx';
import { WaitlistDialog } from './WaitlistDialog.jsx';

export function Website({ assets = '../../assets/logo' }) {
  const [open, setOpen] = React.useState(false);
  const join = () => setOpen(true);
  return (
    <div data-theme="dark" style={{ background: 'var(--surface-page)', color: 'var(--text-primary)', minHeight: '100%' }}>
      <SiteHeader onJoin={join} assets={assets} />
      <SiteHero onJoin={join} assets={assets} />
      <SiteWhat />
      <SiteProcess />
      <SiteProof />
      <SiteFaq />
      <SiteUseCases />
      <SiteCta onJoin={join} />
      <SiteFooter assets={assets} />
      <WaitlistDialog open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
