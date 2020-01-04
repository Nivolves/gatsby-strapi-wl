import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import SocialIcons from '../SocialIcons/SocialIcons.tsx';

import { IMenu, IMenuData } from '../../Types/CommonTypes.ts';
import { IMenuProps } from './HeaderTypes.ts';

import './Menu.scss';

const MENU_QUERY = graphql`
  query MenuQuery {
    menu: allStrapiMenu {
      nodes {
        link
        title
      }
    }
  }
`;

const Menu: React.FC<IMenuProps> = ({ isMenuOpen, menuOpen }): JSX.Element => {
  const {
    menu: { nodes: menu },
  }: IMenuData = useStaticQuery(MENU_QUERY);
  return (
    <div className={`header-menu header-menu-${isMenuOpen ? 'open' : 'close'}`}>
      <div className="close-icon" onClick={menuOpen} />
      <nav className="menu">
        <ul className="header-menu-list">
          {menu.map(
            ({ link, title }: IMenu): JSX.Element => (
              <li onClick={isMenuOpen ? menuOpen : undefined} key={link}>
                <Link className="header-menu-link" to={link}>
                  {title}
                </Link>
              </li>
            )
          )}
        </ul>
        <SocialIcons />
      </nav>
    </div>
  );
};

export default Menu;
