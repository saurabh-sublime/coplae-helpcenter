import React from 'react';

import '@/styles/global.css';
import Category from '@/components/Category/Category';
import Hero from '@/components/Hero/Hero';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout className="overflow-hidden font-roboto">
      <Hero />
      <Category />
    </Layout>
  );
}
