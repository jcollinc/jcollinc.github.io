'use client';

import { useState } from 'react';
import { links } from '@/content/site';

export function CopyEmail() {
  const [status, setStatus] = useState('');

  async function copy() {
    try {
      await navigator.clipboard.writeText(links.email);
      setStatus('Copied!');
    } catch {
      setStatus('Select the address to copy it.');
    }
  }

  return (
    <div className="copy-email">
      <button type="button" onClick={copy} aria-label="Copy email address">Copy address</button>
      <span role="status">{status}</span>
    </div>
  );
}
