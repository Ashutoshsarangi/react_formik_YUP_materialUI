import React from 'react';
import {
  CssBaseline, Container,
  Typography, TextField,
  Avatar, FormControlLabel,
  Button,
  Checkbox,
  Grid,
  Link,
} from '@material-ui/core';
import { Formik, Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
//Reusable Components
import InputField from './Reusable/InputField';
import DateField from './Reusable/DataField';
//Schema
import Schema from '../Schemas';
const SignUpSchema = new Schema().getSchema();


const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
        </Typography>
        </div>
        <Formik
          initialValues={{
            email: '',
            password: '',
            confPassword: '',
            dob: '',
            startDate: new Date(),
            endDate: new Date()
          }}
          validationSchema={SignUpSchema}
          onSubmit={async (values, action) => {
            action.setSubmitting(false);
          }}
        >
          {({
            isValid,
            isSubmitting,
            handleSubmit,
            values,
            touched,
            handleChange,
            handleBlur,
            setFieldValue
          }) => (
              <form className={classes.form} onSubmit={handleSubmit} noValidate>
                <Field
                  id="email"
                  name="email"
                  variant="outlined"
                  label="Email"
                  margin="normal"
                  fullWidth
                  className={classes.textField}
                  autoFocus
                  autoComplete="email"
                  touched={touched}
                  component={InputField}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.emailID}
                />
                <Field
                  id="password"
                  name="password"
                  variant="outlined"
                  label="Password"
                  type="password"
                  margin="normal"
                  fullWidth
                  className={classes.textField}
                  autoComplete="current-password"
                  touched={touched}
                  component={InputField}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <Field
                  id="confPassword"
                  name="confPassword"
                  variant="outlined"
                  label="Confirm Password"
                  type="password"
                  margin="normal"
                  fullWidth
                  className={classes.textField}
                  autoComplete="current-password"
                  touched={touched}
                  component={InputField}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confPassword}
                />
                <Field
                  // views={["year", "month"]}
                  id="dob"
                  name="dob"
                  label="Date Of Birth"
                  fullWidth
                  margin="normal"
                  format="dd/MM/yyyy"
                  inputVariant='outlined'
                  setFieldValue={setFieldValue}
                  component={DateField}
                  value={values.dob}
                />
                <Field
                  id="startDate"
                  name="startDate"
                  label="Start Date"
                  fullWidth
                  margin="normal"
                  format="dd/MM/yyyy"
                  inputVariant='outlined'
                  setFieldValue={setFieldValue}
                  component={DateField}
                  value={values.startDate}
                />
                <Field
                  id="endDate"
                  name="endDate"
                  label="End Date"
                  fullWidth
                  margin="normal"
                  format="dd/MM/yyyy"
                  inputVariant='outlined'
                  minDate={values.startDate}
                  setFieldValue={setFieldValue}
                  component={DateField}
                  value={values.endDate}
                  onBlur={handleBlur}
                // disabled={values.startDate== undefined}
                />
              </form>
            )}
        </Formik>
      </Container>

    </>
  )
}
