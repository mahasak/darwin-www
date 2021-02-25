import React, { useState } from 'react';
import Content from '../components/Content'
import Copyright from '../components/Copyright'
import Header from '../components/Header'
import Navigator from '../components/Navigator'
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
  withStyles
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useSession } from "next-auth/client";
import Hidden from '@material-ui/core/Hidden';
import theme from '../lib/theme'
const drawerWidth = 256;
const useStyles = makeStyles({
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
    padding: theme.spacing(6, 4),
    background: '#eaeff1',
  },
  footer: {
    padding: theme.spacing(2),
    background: '#eaeff1',
  },
});

export const getServerSideProps = async ({ req }) => {
  const token = req.headers.AUTHORIZATION ?? ""
  return { props: {} }
}

const Home = () => {
  const [session, loading] = useSession();
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <nav className={classes.drawer}>
          <Hidden smUp implementation="js">
            <Navigator
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            />
          </Hidden>
          <Hidden xsDown implementation="css">
            <Navigator PaperProps={{ style: { width: drawerWidth } }} />
          </Hidden>
        </nav>
        <div className={classes.app}>
          <Header onDrawerToggle={handleDrawerToggle} />
          <main className={classes.main}>
            <Content />
          </main>
          <footer className={classes.footer}>
            <Copyright text="Test" link="http://localhost:3000" />
          </footer>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default Home