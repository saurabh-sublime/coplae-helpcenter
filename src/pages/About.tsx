import React from 'react';

import Title from '@/components/Title';

export default function Home({ data }) {
  return (
    <main>
      <Title>Hello TypeScript About Page!</Title>
      <p>A TypeScript starter for Gatsby. Great for advanced users.</p>
      <p>
        Follow me on Twitter (
        <a href="https://twitter.com/jpedroschmitz">@jpedroschmitz</a>)
      </p>
    </main>
  );
}

//Query
