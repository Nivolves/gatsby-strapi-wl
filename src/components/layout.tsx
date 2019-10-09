import React, { useCallback, useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Footer from './Footer/Footer';
import Header from './Header/Header';

import context from './context';

import { ILanguage, ISettingsData } from '../Types/SettingsData';

import './styles/layout.scss';

export const LAYOUT_QUERY = graphql`
  query {
    settings: strapiSetting {
      DefaultLanguage {
        language
      }
      FooterLinksColor
      LinksColor
      LinksColorHover
      PrimaryColor
      PrimaryColorHover
    }
    languages: allStrapiLanguages {
      nodes {
        language
      }
    }
  }
`;

const Layout: React.FC = ({ children }): JSX.Element => {
  const data: ISettingsData = useStaticQuery(LAYOUT_QUERY);
  const {
    settings: {
      DefaultLanguage: { language: DefaultLanguage },
      FooterLinksColor,
      LinksColor,
      LinksColorHover,
      PrimaryColor,
      PrimaryColorHover,
    },
    languages: { nodes },
  } = data;

  const allLanguages: string[] = nodes.reduce((languages: string[], { language }: ILanguage): string[] => {
    languages.push(language);
    return languages;
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', PrimaryColor);
    root.style.setProperty('--primary-color-hover', PrimaryColorHover);
    root.style.setProperty('--footer-links-color', FooterLinksColor);
    root.style.setProperty('--link-color', LinksColor);
    root.style.setProperty('--link-hover-color', LinksColorHover);
  }, []);

  const setLanguageByPath = useCallback((): string => {
    if (typeof window !== 'undefined') {
      const path: string = window.location.pathname;
      const lang: string[] = path.split('/');
      if (allLanguages.includes(lang[1])) {
        return lang[1];
      }
      return DefaultLanguage;
    }
    return DefaultLanguage;
  }, []);

  const [language, setLanguage] = useState<string | null>(setLanguageByPath);

  return (
    <context.Provider value={{ language, setLanguage, languages: allLanguages }}>
      <Header />
      {children}
      <Footer />
    </context.Provider>
  );
};
export default Layout;
