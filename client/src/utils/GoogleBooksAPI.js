import axios from "axios";

export default {
  // Gets all books
  getBooks: function(parameters) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${parameters}&download=epub&key=AIzaSyDX3pzL5Y0Q5XBOctn9LrnyyRNVxXNwgWI`);
  },
  // Gets the book with the given parameters
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
};