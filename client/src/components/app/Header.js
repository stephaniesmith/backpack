import React from 'react';
import { rootLinks } from '../../routes';

export default function Header() {
  return (
    <header>
      <nav style={{ display: 'flex', justifyContent: 'space-between', width: 200 }}>
        {rootLinks()}
      </nav>
    </header>
  );
}
