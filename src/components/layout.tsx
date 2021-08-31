import * as React from 'react';
import { FC } from 'react';
import '../styles/layout.scss';
import Header from './header';

const Layout: FC = ({ children }): JSX.Element => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
