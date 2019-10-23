import React from 'react';
import { Link } from 'gatsby';

import { IArticleProps } from './BlogTypes';

import './ArticlePreview.scss';

const ArticlePreview: React.FC<IArticleProps> = ({ alt, buttonText, description, image, title, link }): JSX.Element => (
  <div className="post">
    <div className="post-image-container">
      <img alt={alt} src={image} className="post-image" />
    </div>
    <h3 className="post-title">{title}</h3>
    <p className="post-description">{description}</p>
    <Link to={link} className="btn btn-primary post-btn" type="button">
      {buttonText}
    </Link>
  </div>
);

export default ArticlePreview;
