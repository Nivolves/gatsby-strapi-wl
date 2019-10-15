/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';

import Tabs from '../components/Tabs/Tabs';

import { IDefaultPage, IDefaultTemplateProps, ITab, ITabData } from '../Types/CommonTypes';

const DefaultTemlate: React.FC<IDefaultTemplateProps> = ({ data, pathContext }): JSX.Element => {
  const { html } = pathContext;
  const {
    defaultPage: { link: pageLink },
    tabs: { nodes },
  } = data;

  const pageTabs: ITab[] = nodes.reduce(
    (tabs: ITab[], { childMarkdownRemark: { html: tabContent }, title, defaultpages }: ITabData): ITab[] => {
      const includesPage: string[] = defaultpages.map(({ link }: IDefaultPage): string => link);
      if (includesPage.includes(pageLink)) {
        tabs.push({ content: tabContent, title });
      }
      return tabs;
    },
    []
  );

  return (
    <div className="content">
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Tabs tabs={pageTabs} />
    </div>
  );
};

export default DefaultTemlate;

export const query = graphql`
  query DefaultTemplate($link: String!) {
    defaultPage: strapiDefaultpages(link: { eq: $link }) {
      link
    }
    tabs: allTabs {
      nodes {
        childMarkdownRemark {
          html
        }
        defaultpages {
          link
        }
        title
      }
    }
  }
`;
