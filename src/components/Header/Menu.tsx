/* eslint-disable react/no-children-prop */
import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import CloseIcon from './CloseIcon';
import Dropdawn from './Dropdawn';
import Logo from './Logo';
import SecondaryHeader from './SecondaryHeader';

import { IHeaderMenu, IMenu, IMenuData } from '../../Types/CommonTypes';
import { IMenuProps } from './HeaderTypes';

import './Menu.scss';

const MENU_QUERY = graphql`
  query {
    menu: allStrapiMenu(sort: { fields: order }) {
      nodes {
        language {
          language
        }
        link
        order
        parentPage {
          title
        }
        title
        type
      }
    }
    settings: strapiSetting {
      Logo {
        childImageSharp {
          resize {
            src
          }
        }
      }
      siteName
    }
  }
`;

const Menu: React.FC<IMenuProps> = ({ isMenuOpen, language, openMenu }): JSX.Element => {
  const data: IMenuData = useStaticQuery(MENU_QUERY);
  const {
    menu: { nodes },
    settings: {
      Logo: {
        childImageSharp: {
          resize: { src },
        },
      },
      siteName: alt,
    },
  } = data;

  const menu: IHeaderMenu[] = nodes.reduce(
    (menuPages: IHeaderMenu[], { language: { language: cult }, link, parentPage, title, type }: IMenu): IHeaderMenu[] => {
      if (language === cult) {
        if (type === 'single' || !type) {
          menuPages.push({ link, title, className: type || 'single' });
        }
        if (type === 'dropdawn') {
          menuPages.push({ title, className: type, children: [] });
        }
        if (type === 'dropdawn item' && parentPage) {
          const { title: parentPageTitle } = parentPage;
          const dropdawnPageIndex = menuPages.findIndex(
            ({ title: dropdawnItemTitle }: IHeaderMenu): boolean => dropdawnItemTitle === parentPageTitle
          );
          if (menuPages[dropdawnPageIndex]) {
            const { children: dropdawnPageChildren } = menuPages[dropdawnPageIndex];
            dropdawnPageChildren.push({
              title,
              link,
              className: 'dropdawn-item',
            });
          }
        }
      }
      return menuPages;
    },
    []
  );

  return (
    <nav>
      <Logo alt={alt} logo={src} path={language} />
      <div className={`header-menu ${isMenuOpen ? 'header-menu-open' : 'header-menu-close'}`}>
        <div className="header-menu-container">
          <CloseIcon openMenu={openMenu} />
          <ul className="menu">
            {menu.map((item: IHeaderMenu) => {
              const { className, link, title } = item;
              if (item.children) {
                const { children } = item;
                return (
                  <Dropdawn
                    key={title}
                    className={className}
                    children={children}
                    isMenuOpen={isMenuOpen}
                    openMenu={openMenu}
                    title={title}
                  />
                );
              }
              return (
                <li className={className} key={title}>
                  <Link onClick={isMenuOpen ? () => openMenu() : () => {}} to={link}>
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <SecondaryHeader isMenuOpen={isMenuOpen} openMenu={openMenu} />
        </div>
      </div>
    </nav>
  );
};

export default Menu;
