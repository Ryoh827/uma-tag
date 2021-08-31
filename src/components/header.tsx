import * as React from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';

const Header = (): JSX.Element => {
  return (
    <div className="header">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className="uma-tag-title">
            ウマタッグ
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
