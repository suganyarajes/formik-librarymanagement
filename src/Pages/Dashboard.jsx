import React, { useState } from 'react';
import { Container, Grid, Paper, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import BookForm from '../Components/BookForm';
import AuthorForm from '../Components/AuthorForm';
import './Styles.css'; // Importing the common styles

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [openBookForm, setOpenBookForm] = useState(false);
  const [openAuthorForm, setOpenAuthorForm] = useState(false);

  const handleAddBook = (values) => {
    setBooks([...books, values]);
    setOpenBookForm(false);
  };

  const handleEditBook = (values) => {
    setBooks(books.map(book => book.isbn === values.isbn ? values : book));
    setSelectedBook(null);
    setOpenBookForm(false);
  };

  const handleDeleteBook = (isbn) => {
    setBooks(books.filter(book => book.isbn !== isbn));
  };

  const handleAddAuthor = (values) => {
    setAuthors([...authors, values]);
    setOpenAuthorForm(false);
  };

  const handleEditAuthor = (values) => {
    setAuthors(authors.map(author => author.name === values.name ? values : author));
    setSelectedAuthor(null);
    setOpenAuthorForm(false);
  };

  const handleDeleteAuthor = (name) => {
    setAuthors(authors.filter(author => author.name !== name));
  };

  const openEditBookForm = (book) => {
    setSelectedBook(book);
    setOpenBookForm(true);
  };

  const openEditAuthorForm = (author) => {
    setSelectedAuthor(author);
    setOpenAuthorForm(true);
  };

  return (
    <Container className="container">
      <Typography variant="h4" gutterBottom style={{ color: 'white' }}>Library Management System</Typography>
      <Grid container spacing={3} className="container">
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: 16 }}>
            <Typography variant="h6" gutterBottom>Add Book</Typography>
            <Button variant="contained" color="primary" onClick={() => setOpenBookForm(true)}>Add Book</Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: 16 }}>
            <Typography variant="h6" gutterBottom>Add Author</Typography>
            <Button variant="contained" color="primary" onClick={() => setOpenAuthorForm(true)}>Add Author</Button>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3} className="container">
        <Grid item xs={12}>
          <Paper style={{ padding: 16 }}>
            <Typography variant="h6" gutterBottom>Books</Typography>
            <ul>
              {books.map((book, index) => (
                <li key={index}>
                  {book.title} by {book.author} (ISBN: {book.isbn}, Published: {book.publicationDate})
                  <Grid container spacing={1} className="container">
                    <Grid item xs={4} sm={3} md={2}>
                      <Button variant="contained" color="secondary" fullWidth className="button-spacing" onClick={() => openEditBookForm(book)}>Edit</Button>
                    </Grid>
                    <Grid item xs={4} sm={3} md={2}>
                      <Button variant="contained" color="error" fullWidth className="button-spacing" onClick={() => handleDeleteBook(book.isbn)}>Delete</Button>
                    </Grid>
                  </Grid>
                </li>
              ))}
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={{ padding: 16 }}>
            <Typography variant="h6" gutterBottom>Authors</Typography>
            <ul>
              {authors.map((author, index) => (
                <li key={index}>
                  {author.name} (Born: {author.birthDate}) - {author.biography}
                  <Grid container spacing={1} className="container">
                    <Grid item xs={4} sm={3} md={2}>
                      <Button variant="contained" color="secondary" fullWidth className="button-spacing" onClick={() => openEditAuthorForm(author)}>Edit</Button>
                    </Grid>
                    <Grid item xs={4} sm={3} md={2}>
                      <Button variant="contained" color="error" fullWidth className="button-spacing" onClick={() => handleDeleteAuthor(author.name)}>Delete</Button>
                    </Grid>
                  </Grid>
                </li>
              ))}
            </ul>
          </Paper>
        </Grid>
      </Grid>
      <Dialog open={openBookForm} onClose={() => setOpenBookForm(false)}>
        <DialogTitle>{selectedBook ? 'Edit Book' : 'Add Book'}</DialogTitle>
        <DialogContent>
          <BookForm
            initialValues={selectedBook || { title: '', author: '', isbn: '', publicationDate: '' }}
            onSubmit={selectedBook ? handleEditBook : handleAddBook}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenBookForm(false)} color="primary">Cancel</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openAuthorForm} onClose={() => setOpenAuthorForm(false)}>
        <DialogTitle>{selectedAuthor ? 'Edit Author' : 'Add Author'}</DialogTitle>
        <DialogContent>
          <AuthorForm
            initialValues={selectedAuthor || { name: '', birthDate: '', biography: '' }}
            onSubmit={selectedAuthor ? handleEditAuthor : handleAddAuthor}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAuthorForm(false)} color="primary">Cancel</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Dashboard;
