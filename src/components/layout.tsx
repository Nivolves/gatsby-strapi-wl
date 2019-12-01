import React, { useCallback } from 'react';

import Header from './Header/Header';

import './styles/layout.scss';

const Layout: React.FC = ({ children }): JSX.Element => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
export default Layout;
