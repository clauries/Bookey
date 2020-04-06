import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, TextField, Box, List, ListItem, Link } from '@material-ui/core';
import { Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core';
import { borders } from '@material-ui/system';
import GoogleBooksAPI from '../utils/GoogleBooksAPI';
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

function Search() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  const [bookRes, setBookRes] = useState([]);
  const [formObject, setFormObject] = useState({});

  const searchAPI = (search) => {
    GoogleBooksAPI.getBooks(search)
      .then(res => {
        setBookRes(res.data.items);
        console.log("bookRes", bookRes);
      })
      .catch(err => console.log(err));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormObject({ ...formObject, [name]: value })
    searchAPI(formObject.searchBooks);
  };

  const handleSaveBook = (e, book) => {
    e.preventDefault();
    console.log("e", e);
    // const book = e.target;
    console.log("book", book)
    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    })
    .then(() => this.getBooks())
    .catch(err => console.log(err));
  };

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
        <TextField onChange={handleInputChange} name="searchBooks" />
      </Box>
      <Box
        border={1}
        borderRadius={16}
        borderColor="grey.500"
        padding="16px"
        margin="2% 10%">
        <Typography variant="h3">Results</Typography>
        <div>
          {bookRes ? (
            <List className={classes.list}>
              {bookRes.map(book => (
                <div className={classes.cardRoot}>
                <Card key={book._id}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={book.volumeInfo.hasOwnProperty('imageLinks') ? book.volumeInfo.imageLinks.thumbnail : ""}
                      title="Cover of Book"
                    />
                    <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <Typography variant="h5" component="h2">
                        <Link href={book.saleInfo.buyLink} >
                          {book.volumeInfo.title}
                        </Link>
                      </Typography>
                      <Typography gutterBottom variant="h6" component="h3">
                          {book.volumeInfo.subtitle}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                      Written by {book.volumeInfo.authors}
                      {book.volumeInfo.description}
                      </Typography>
                      
                    </CardContent>
                    </div>
                  </CardActionArea>
                  <CardActions>
        <Button size="small" color="secondary" variant="contained" onClick={(e) => handleSaveBook(e, book)}>
          Save
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

export default Search;