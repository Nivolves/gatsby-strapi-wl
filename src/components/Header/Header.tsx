import React, { useCallback, useContext, useState } from 'react';

import LanguageSelector from './LanguageSelector';
import Menu from './Menu';
import MenuButton from './MenuButton';

import context from '../context';

import { IContext } from '../../Types/ContextTypes';

import './Header.scss';

const Header: React.FC = (): JSX.Element => {
  const [isMenuOpen, openMenu] = useState<boolean>(false);
  const { language }: IContext = useContext(context);

  const openMobileMenu = useCallback(() => {
    document.getElementsByTagName('body')[0].classList.toggle('fixed');
    openMenu(!isMenuOpen);
  }, [isMenuOpen]);

  return (
    <header>
      <div className="header-container">
        <div className="header-left-side">
          <MenuButton openMenu={openMobileMenu} />
          <Menu language={language || 'en'} isMenuOpen={isMenuOpen} openMenu={openMobileMenu} />
        </div>
        <div className="header-right-side">
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
};

export default Header;
