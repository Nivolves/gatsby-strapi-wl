import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import { ILogo } from '../../Types/CommonTypes.ts';

import './Logo.scss';

const LOGO_QUERY = graphql`
  query LogoQuery {
    settings: strapiSettings {
      logo {
        childImageSharp {
          fluid {
            src
          }
        }
      }
      name
    }
  }
`;

const Logo: React.FC = () => {
  const {
    settings: {
      logo: {
        childImageSharp: {
          fluid: { src },
        },
      },
      name,
    },
  }: ILogo = useStaticQuery(LOGO_QUERY);
  return (
    <Link to="/" className="logo-container">
      <img src={src} alt={name} />
    </Link>
  );
};

export default Logo;
