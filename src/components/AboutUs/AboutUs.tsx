import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { IMainAbout } from '../../Types/CommonTypes.ts';

import './AboutUs.scss';

const ABOUTUS_QUERY = graphql`
  query AboutQuery {
    aboutUs: strapiAboutus {
      title
      subtitle
      mainPageContent: mainpage_content
      LinkText: link_text
      link
      main_page_photo {
        childImageSharp {
          fluid {
            src
          }
        }
        name
      }
    }
  }
`;

const AboutUs: React.FC = (): JSX.Element => {
  const {
    aboutUs: {
      title,
      subtitle,
      mainPageContent,
      LinkText,
      link,
      main_page_photo: {
        childImageSharp: {
          fluid: { src },
        },
        name: alt,
      },
    },
  }: IMainAbout = useStaticQuery(ABOUTUS_QUERY);

  return (
    <section className="aboutUs">
      <div className="text_block">
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
        <article>{mainPageContent}</article>
        <Link to={link}>{LinkText}</Link>
      </div>
      <div className="image_block">
        <div />
        <img src={src} alt={alt} />
      </div>
    </section>
  );
};
export default AboutUs;
