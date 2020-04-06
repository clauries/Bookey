import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Box, List, Link } from '@material-ui/core';
import { Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core';
import { borders } from '@material-ui/system';
import API from '../utils/API';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    flexGrow: 1,
  },
  button: {
    color: "white",
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardRoot: {
    maxWidth: 345,
    marginBottom: 20,

  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  media: {
    height: 350,
  },

}));

function Saved() {
  const classes = useStyles();
  const [savedBooks, setSavedBooks] = useState([]);

  useEffect(() => {
    loadBooks()
  }, [])

  const loadBooks = () => {
    API.getBooks()
      .then(res => 
        setSavedBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  const deleteBook = (id) => {
    console.log("delete!");
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  return (
    <div>
      <Box
        border={1}
        borderRadius={16}
        borderColor="grey.500"
        padding="16px"
        margin="2% 12%">
        <Typography variant="h2" className={classes.title}>
          Saved Books
        </Typography>
        <div>
          {savedBooks ? (
            <List className={classes.list}>
              {savedBooks.map(book => (
                <div className={classes.cardRoot}>
                  <Card key={book._id}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={book.image}
                        title="Cover of Book"
                      />
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <Typography variant="h5" component="h2">
                            <Link href={book.link} >
                              {book.title}
                            </Link>
                          </Typography>
                          <Typography gutterBottom variant="h6" component="h3">
                            {book.subtitle}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            Written by {book.authors}
                            {book.description}
                          </Typography>

                        </CardContent>
                      </div>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="secondary" variant="contained" 
                      onClick={() => deleteBook(book._id)}
                      >
                        Delete
                      </Button>
                    </CardActions>
                  </Card>
                </div>
              ))}

            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}
        </div>
      </Box>
    </div>

  );
}

export default Saved;