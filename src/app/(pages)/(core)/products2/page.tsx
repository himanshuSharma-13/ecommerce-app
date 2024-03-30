// pages/index.tsx

import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div>
      <Link href="/products/men">
        <h1>MEN</h1>
      </Link>
      <Link href="/products/women">
        <h1>WOMEN</h1>
      </Link>
      <Link href="/products/kids">
        <h1>KIDS</h1>
      </Link>
    </div>
  );
};

export default HomePage;
