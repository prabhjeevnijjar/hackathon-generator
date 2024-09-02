import React from 'react';
import brandLogo from '../../../../public/static/icons/dphi-logo.png';

const Header = () => {
  return (
    <div className="h-[64px] px-10 flex items-center">
      <img src={brandLogo.src} alt="brand-logo" />
    </div>
  );
};

export default Header;
