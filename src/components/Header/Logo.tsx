import React from 'react';
import { Link } from 'gatsby';

import { ILogoProps } from './HeaderTypes';

import './Logo.scss';

const Logo: React.FC<ILogoProps> = ({ alt, logo, path }): JSX.Element => (
  <Link className="logo-container" to={path}>
    <img className="logo" src={logo} alt={alt} />
  </Link>
);

export default Logo;
