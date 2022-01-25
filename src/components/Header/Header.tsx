import React from 'react';

import Logo from '@/assets/logo-01.svg';

export default function Header() {
  return (
    <div className="flex h-16 mx-40 justify-between items-center font-roboto">
      <div className="w-32 -ml-6 ">
        <Logo />
      </div>
      <div className="space-x-4">
        <a href="#" className="text-themeBlue">
          Submit a request
        </a>
        <a href="#" className="text-themeBlue">
          Sign in{' '}
        </a>
      </div>
    </div>
  );
}
