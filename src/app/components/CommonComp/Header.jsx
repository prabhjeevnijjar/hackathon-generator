import React from 'react';
import brandLogo from '../../../../public/static/icons/dphi-logo.png';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="h-[64px] px-10 flex items-center">
      <Link href="/">
        <img src={brandLogo.src} alt="brand-logo" />
      </Link>
    </div>
  );
};

export default Header;
