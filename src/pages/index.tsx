import React, { useEffect } from 'react';
import { graphql, navigate, useStaticQuery } from 'gatsby';

import { ISettingsData } from '../Types/SettingsData';

export const INDEX_PAGE_QUERY = graphql`
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
  }
`;
const IndexPage: React.FC = (): JSX.Element => {
  const data: ISettingsData = useStaticQuery(INDEX_PAGE_QUERY);
  const {
    settings: {
      DefaultLanguage: { language: DefaultLanguage },
    },
  } = data;

  useEffect(() => {
    navigate(`/${DefaultLanguage}`);
  }, []);

  return <></>;
};
export default IndexPage;
