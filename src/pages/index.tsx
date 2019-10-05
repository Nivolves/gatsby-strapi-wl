import React, { useEffect } from 'react';
import { graphql, navigate, StaticQuery } from 'gatsby';

import { ILanguageData } from '../Types/LanguageData';

const IndexPage = () => {
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
          navigate(`/${DefaultLanguage}`);
        }, []);

        return <></>;
      }}
    />
  );
};
export default IndexPage;
