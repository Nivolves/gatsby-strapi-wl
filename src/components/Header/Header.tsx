import React, { useCallback, useState } from 'react';

import Button from '../Button/Button';
import Logo from './Logo';
import Menu from './Menu';
import OpenBtn from './OpenBtn';

import './Header.scss';

const Header: React.FC = (): JSX.Element => {
  const [isMenuOpen, openMenu] = useState(false);

  const menuOpen = useCallback(() => {
    openMenu(!isMenuOpen);
    document.getElementsByTagName('body')[0].classList.toggle('fixed');
  }, [isMenuOpen]);

  return (
    <header>
      <div className="header-container">
        <div className="header-left-side">
          <OpenBtn menuOpen={menuOpen} />
          <Logo />
          <Menu isMenuOpen={isMenuOpen} menuOpen={menuOpen} />
        </div>
        <div className="header-right-side">
          <Button />
        </div>
      </div>
    </header>
  );
};

export default Header;
