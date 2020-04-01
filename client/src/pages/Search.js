import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, TextField, Box } from '@material-ui/core';
import { borders } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1, 
  },
  title: {
    flexGrow: 1,
  },
  button: {
    color: "white",
  },

}));

function Search() {
  const classes = useStyles();

  return (

    <div className={classes.root}>
      <Box
        border={1}
        borderRadius={16}
        borderColor="grey.500"
        padding="16px"
        margin="2% 10%" >
        <Typography variant="h2" className={classes.title}>
          Search Google Books
      </Typography>
        <Typography variant="h5" className={classes.title}>
          What do you want to search for?
      </Typography>
        <TextField />
      </Box>
      <Box
        border={1}
        borderRadius={16}
        borderColor="grey.500"
        padding="16px"
        margin="2% 10%">
        <Typography variant="h3">Results</Typography>
        
      </Box>
    </div>

  );
}

export default Search;