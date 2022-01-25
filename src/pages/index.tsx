import React from 'react';

import Title from '@/components/Title';

export default function Home() {
  return (
    <main>
      <Title>Hello TypeScript!</Title>
      <p>A TypeScript starter for Gatsby. Great for advanced users.</p>
      <p>
        Follow me on Twitter (
        <a href="https://twitter.com/jpedroschmitz">@jpedroschmitz</a>)
      </p>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> and{' '}
        <a href="http://strapi.io">Strapi</a>
      </footer>
    </main>
  );
}
