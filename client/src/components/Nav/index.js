import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import MenuBookIcon from '@material-ui/icons/MenuBook';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    color: "white",
  }
}));

function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <MenuBookIcon /> 
        <Typography variant="h6" className={classes.title}>
             BooKey
          </Typography>
          <Button className={classes.button} href="/">Search</Button>
          <Button className={classes.button} href="/saved">Saved</Button>
        </Toolbar>
      </AppBar>
    </div>

  );
}

export default Nav;