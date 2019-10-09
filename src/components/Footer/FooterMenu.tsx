import React, { useState } from 'react';
import { Link } from 'gatsby';

import { IDefaultPage } from '../../Types/CommonTypes';
import { IFooterMenuProps } from './FooterTypes';

import './FooterMenu.scss';

const FooterMenu: React.FC<IFooterMenuProps> = ({ pages, title }): JSX.Element => {
  const [isDropdawnOpen, openDropdawn] = useState<boolean>(false);

  return (
    <div className="footer-menu">
      <div
        className={`footer-menu-title ${isDropdawnOpen ? 'footer-menu-title-open' : 'footer-menu-title-close'}`}
        onClick={(): void => openDropdawn(!isDropdawnOpen)}
      >
        {title}
      </div>
      <ul className={`footer-menu-list ${isDropdawnOpen ? 'footer-menu-list-open' : 'footer-menu-list-close'}`}>
        {pages.map(
          ({ link, title: pageTitle }: IDefaultPage): JSX.Element => (
            <li key={link}>
              <Link className="footer-menu-link" to={link}>
                {pageTitle}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default FooterMenu;
