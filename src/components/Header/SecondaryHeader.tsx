import React, { useContext } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import context from '../context';

import { ISecondaryHeader, ISecondaryHeaderData, IDefaultPage } from '../../Types/CommonTypes';
import { ISecondaryHeaderProps } from './HeaderTypes';

import './SecondaryHeader.scss';

const SECONDARY_HEADER_QUERY = graphql`
  query {
    secondaryHeader: allStrapiSecondaryheader {
      nodes {
        language {
          language
        }
        link
        title
      }
    }
  }
`;

const SecondaryHeader: React.FC<ISecondaryHeaderProps> = ({ isMenuOpen, openMenu }): JSX.Element => {
  const data: ISecondaryHeaderData = useStaticQuery(SECONDARY_HEADER_QUERY);
  const { language: cult } = useContext(context);

  const {
    secondaryHeader: { nodes },
  } = data;

  const secondaryHeader: ISecondaryHeader[] = nodes.filter(({ language: { language } }: ISecondaryHeader): boolean => cult === language);

  return (
    <ul className="secondary-header">
      {secondaryHeader.map(
        ({ link, title }: IDefaultPage): JSX.Element => (
          <li key={link}>
            <Link onClick={isMenuOpen ? (): void => openMenu() : (): void => {}} to={link}>
              {title}
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

export default SecondaryHeader;
