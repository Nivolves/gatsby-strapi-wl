import React from 'react';

import Header from './Header/Header.tsx';

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
