import * as React from 'react';
import { FC } from 'react';

const Layout: FC = ({ children }): JSX.Element => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Layout;
