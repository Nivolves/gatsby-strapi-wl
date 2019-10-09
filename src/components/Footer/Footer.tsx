import React, { useContext } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import FooterContacts from './FooterContacts';
import FooterMenu from './FooterMenu';

import context from '../context';

import { IPageType, IPageTypes } from '../../Types/CommonTypes';

import './Footer.scss';

const PAGES_TYPES_QUERY = graphql`
  query {
    pageTypes: allStrapiPagetypes(sort: { fields: order }) {
      nodes {
        defaultpages {
          link
          title
        }
        language {
          language
        }
        title
      }
    }
  }
`;

const Footer: React.FC = (): JSX.Element => {
  const { language: cult } = useContext(context);
  const data: IPageTypes = useStaticQuery(PAGES_TYPES_QUERY);

  const {
    pageTypes: { nodes },
  } = data;

  const pageTypes: IPageType[] = nodes.filter(({ language: { language } }: IPageType): boolean => language === cult);

  return (
    <footer>
      <div className="footer-container">
        {pageTypes.map(
          ({ defaultpages, title }: IPageType): JSX.Element => (
            <FooterMenu key={title} pages={defaultpages} title={title} />
          )
        )}
        <FooterContacts />
      </div>
    </footer>
  );
};

export default Footer;
