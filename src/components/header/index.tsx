import React from 'react';
import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <header className="w-100 fixed top-0 left-0 bg-dark-gray pa3 white">
      <Link href="/" data-testid="link-home">
        <a>Home</a>
      </Link>
    </header>
  );
};
