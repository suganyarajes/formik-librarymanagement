import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from '@mui/material';

const AuthorForm = ({ onSubmit, initialValues }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    birthDate: Yup.date().required('Required'),
    biography: Yup.string().required('Required')
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field name="name">
            {({ field }) => (
              <TextField {...field} label="Name" fullWidth margin="normal" />
            )}
          </Field>
          <ErrorMessage name="name" component="div" />
          
          <Field name="birthDate">
            {({ field }) => (
              <TextField {...field} label="Birth Date" type="date" fullWidth margin="normal" InputLabelProps={{ shrink: true }} />
            )}
          </Field>
          <ErrorMessage name="birthDate" component="div" />
          
          <Field name="biography">
            {({ field }) => (
              <TextField {...field} label="Biography" fullWidth margin="normal" multiline rows={4} />
            )}
          </Field>
          <ErrorMessage name="biography" component="div" />
          
          <Button type="submit" disabled={isSubmitting} variant="contained" color="primary">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AuthorForm;
