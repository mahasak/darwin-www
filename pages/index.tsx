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
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import PermMediaOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActual';
import PublicIcon from '@material-ui/icons/Public';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';
import TimerIcon from '@material-ui/icons/Timer';
import SettingsIcon from '@material-ui/icons/Settings';
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';
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

  const menu = [
    {
      id: 'Develop',
      children: [
        { id: 'Authentication', icon: <PeopleIcon />, active: true },
        { id: 'Database', icon: <DnsRoundedIcon />, active: true  },
        { id: 'Storage', icon: <PermMediaOutlinedIcon /> , active: true },
        { id: 'Hosting', icon: <PublicIcon />, active: true  },
        { id: 'Functions', icon: <SettingsEthernetIcon />, active: true  },
        { id: 'ML Kit', icon: <SettingsInputComponentIcon />, active: true  },
      ],
    },
    {
      id: 'Quality',
      children: [
        { id: 'Analytics', icon: <SettingsIcon />, active: true  },
        { id: 'Performance', icon: <TimerIcon />, active: true  },
        { id: 'Test Lab', icon: <PhonelinkSetupIcon />, active: true  },
      ],
    },
  ];

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