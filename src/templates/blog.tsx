import React from 'react';
import { graphql } from 'gatsby';

import ArticlePreview from '../components/Blog/ArticlePreview';

import { IBlogTemplateProps } from '../Types/CommonTypes';

const BlogTemlate: React.FC<IBlogTemplateProps> = ({ data }): JSX.Element => {
  const {
    articles: { nodes },
    blogPage: { title, buttonText },
  } = data;

  return (
    <div className="content">
      <h1 className="blog-title">{title}</h1>
      <div className="blog-container">
        {nodes.map(
          ({
            title: articleTitle,
            link,
            previewContent,
            previewImage: {
              childImageSharp: {
                resize: { src },
              },
            },
            previewImageAlt,
          }) => (
            <ArticlePreview
              key={link}
              alt={previewImageAlt}
              buttonText={buttonText}
              description={previewContent}
              image={src}
              title={articleTitle}
              link={link}
            />
          )
        )}
      </div>
    </div>
  );
};

export default BlogTemlate;

export const query = graphql`
  query blogTemplate($link: String!) {
    blogPage: strapiBlogpage(link: { eq: $link }) {
      buttonText
      title
    }
    articles: allStrapiArticle(filter: { blogpage: { elemMatch: { link: { eq: $link } } } }) {
      nodes {
        title
        link
        previewContent
        previewImage {
          childImageSharp {
            resize {
              src
            }
          }
        }
        previewImageAlt
      }
    }
  }
`;
