import React from 'react';
import { rootLinks } from '../../routes';

export default function Header() {
  return (
    <header>
      <nav>
        {rootLinks()}
      </nav>
    </header>
  );
}
