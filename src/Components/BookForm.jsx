import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from '@mui/material';

const BookForm = ({ onSubmit, initialValues }) => {
  const validationSchema = Yup.object({
    title: Yup.string().required('Required'),
    author: Yup.string().required('Required'),
    isbn: Yup.string().required('Required'),
    publicationDate: Yup.date().required('Required')
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field name="title">
            {({ field }) => (
              <TextField {...field} label="Title" fullWidth margin="normal" />
            )}
          </Field>
          <ErrorMessage name="title" component="div" />
          
          <Field name="author">
            {({ field }) => (
              <TextField {...field} label="Author" fullWidth margin="normal" />
            )}
          </Field>
          <ErrorMessage name="author" component="div" />
          
          <Field name="isbn">
            {({ field }) => (
              <TextField {...field} label="ISBN" fullWidth margin="normal" />
            )}
          </Field>
          <ErrorMessage name="isbn" component="div" />
          
          <Field name="publicationDate">
            {({ field }) => (
              <TextField {...field} label="Publication Date" type="date" fullWidth margin="normal" InputLabelProps={{ shrink: true }} />
            )}
          </Field>
          <ErrorMessage name="publicationDate" component="div" />
          
          <Button type="submit" disabled={isSubmitting} variant="contained" color="primary">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default BookForm;
