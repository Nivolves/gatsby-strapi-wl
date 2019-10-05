import React, { useEffect, useState } from 'react';
import { graphql, StaticQuery } from 'gatsby';

import Header from './Header/Header';

import context from './context';

import { ILanguageData } from '../Types/LanguageData';

import './styles/layout.scss';

const Layout: React.FC = ({ children }) => {
  const [language, setLanguage] = useState<string | null>(null);
  return (
    <StaticQuery
      query={graphql`
        query {
          strapiSettings {
            DefaultLanguage {
              language
            }
          }
        }
      `}
      render={(data: ILanguageData): JSX.Element => {
        const {
          strapiSettings: {
            DefaultLanguage: { language: DefaultLanguage },
          },
        } = data;

        useEffect(() => {
          if (!language) {
            setLanguage(DefaultLanguage);
          }
        }, []);

        return (
          <context.Provider value={{ language, setLanguage }}>
            <Header />
            {children}
          </context.Provider>
        );
      }}
    />
  );
};
export default Layout;
