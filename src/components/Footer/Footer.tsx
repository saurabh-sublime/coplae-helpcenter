import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="flex my-10 mx-40 justify-between items-center font-roboto">
      <a href="#" className="text-themeBlue text-sm underline">
        Get back to Coplae.com
      </a>
      <p className="text-sm">© Copyright {year}. All Rights Reserved.</p>
    </div>
  );
}
