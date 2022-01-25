import React from 'react';
import { BaseComponentProps } from '@/types';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export default function Layout(props: any) {
  const { children, className } = props;

  return (
    <div className={className}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
