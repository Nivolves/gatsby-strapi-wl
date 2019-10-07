/* eslint-disable no-param-reassign */
import React, { useContext } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import context from '../context';

import { IDefaultPage, IPageType, IPageTypes } from '../../Types/CommonTypes';
import { ISecondaryHeader } from './HeaderTypes';

import './SecondaryHeader.scss';

const PAGES_TYPES = graphql`
  query {
    pageTypes: allStrapiPagetypes {
      nodes {
        defaultpages {
          link
          title
        }
        type
      }
    }
  }
`;

const SecondaryHeader: React.FC<ISecondaryHeader> = ({ isMenuOpen, openMenu }): JSX.Element => {
  const data: IPageTypes = useStaticQuery(PAGES_TYPES);
  const { language } = useContext(context);

  const {
    pageTypes: { nodes },
  } = data;

  const secondaryHeader: IDefaultPage[] = nodes.reduce((pages: IDefaultPage[], { type, defaultpages }: IPageType) => {
    if (type === 'secondaryHeader') {
      const secondaryHeaderPages = defaultpages.filter(({ link }: IDefaultPage): boolean => {
        const cult = link.split('/');
        return cult[1] === language;
      });
      pages = [...secondaryHeaderPages];
    }
    return pages;
  }, []);

  return (
    <ul className="secondary-header">
      {secondaryHeader.map(
        ({ link, title }: IDefaultPage): JSX.Element => (
          <li key={link}>
            <Link onClick={isMenuOpen ? () => openMenu() : () => {}} to={link}>
              {title}
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

export default SecondaryHeader;
