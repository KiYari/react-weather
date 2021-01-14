import React from 'react';
import {AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core';
import Sidebar from './Sidebar';

const useStyles = makeStyles({
  logo: {
    fontSize: 24
  },
});
export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="flex">
    <Toolbar>
      <Sidebar/>
        <Typography className={classes.logo} variant="h6" color="inherit" noWrap="noWrap">
          〔Weather<code style={{fontSize: 36}}>・</code>Call〕
        </Typography>
    </Toolbar>
  </AppBar>);
}
