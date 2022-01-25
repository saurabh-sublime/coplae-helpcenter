import React from 'react';
import HeroIcon1 from '@/assets/people/peoples.svg';
import HeroIcon2 from '@/assets/people/peoples-2.svg';

export default function Hero() {
  return (
    <div
      className="bg-gradient-to-r relative flex flex-col items-center justify-center from-themeBlueGradiant via-themeBlue to-themeBlueGradiant"
      style={{ height: '300px' }}
    >
      <div className="absolute left-0 -bottom-14 pb-1">
        <HeroIcon1 />
      </div>
      <h4 className="text-2xl font-bold pb-4">Coplae Help Center</h4>
      <input
        type="text"
        name="search"
        value={''}
        id="search"
        className={`w-184 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-themeBlue transition-all  px-6 py-3 focus:border-themeBlue block sm:text-sm border rounded-lg`}
        placeholder="Search"
      />
      <div className="-mr-20 absolute right-0 -bottom-10 pb-0.5">
        <HeroIcon2 />
      </div>
    </div>
  );
}
