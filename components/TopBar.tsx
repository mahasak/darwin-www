import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  makeStyles
} from '@material-ui/core';
import Logo from './Logo';

type Props = {
  className: string;
};

const TopBar: React.FC<Props> = (props: Props) => (
  <AppBar position="fixed"
    className={clsx(props.className)}
    elevation={0}
  >
    <Toolbar>
      <Link href="/">
        <a><Logo /></a>
      </Link>
    </Toolbar>
  </AppBar>
);

export default TopBar;