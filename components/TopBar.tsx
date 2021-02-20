import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  makeStyles
} from '@material-ui/core';
import Logo from './Logo';

const useStyles = makeStyles(({
  root: {},
  toolbar: {
    height: 64
  }
}));

const TopBar = () => {
  const classes = useStyles();

  return (
    <AppBar
      className={clsx(classes.root)}
      elevation={0}
    >
      <Toolbar className={classes.toolbar}>
        <Logo />
      </Toolbar>
    </AppBar>
  )
};

export default TopBar;