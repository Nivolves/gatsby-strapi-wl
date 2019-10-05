import * as React from 'react';

import Header from './Header/Header';

import './styles/layout.scss';

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
