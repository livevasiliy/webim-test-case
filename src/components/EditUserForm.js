import React from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { Formik } from 'formik'
import * as yup from 'yup'
import { updateUserById } from '../redux/actions'

const schema = yup.object().shape({
  username: yup
    .string()
    .required("Is required")
    .min(1, "Min length is 1")
    .max(150, "max length is 150")
    .matches(/^[\w.@+-]+$/, 'Letters, digits and @/./+/-/_ only'),
  password: yup
    .string()
    .required("Is required")
    .min(1, "Min length is 1")
    .max(128, "Max length is 128")
    .matches(/^(?=.*[A-Z])(?=.*\d).{8,}$/,
      'Password should stated uppercase, contain digits'),
  first_name: yup
    .string()
    .required()
    .max(30, "Max length is 30"),
  last_name: yup
    .string()
    .required()
    .max(150),
  is_active: yup
    .string()
    .required()
    .bool()
})

const EditUserForm = ({ alert, push, updateUserById }) => {

  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        is_active: true
      }}
      onSubmit={async (values, { setSubmitting }) => {
        updateUserById(1, values)
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        isSubmitting,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          {alert && <Alert variant={'danger'}>{alert}</Alert>}

          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              name="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              isValid={touched.username && !errors.username}
              isInvalid={!!errors.username}
            />
            {isValid &&
            <Form.Control.Feedback type={'valid'}>
              Correct!
            </Form.Control.Feedback>}
            <Form.Control.Feedback type={'invalid'}>
              {errors.username}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="first_name">
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first name"
              name="username"
              value={values.first_name}
              onChange={handleChange}
              onBlur={handleBlur}
              isValid={touched.first_name && !errors.first_name}
              isInvalid={!!errors.first_name}
            />
            {isValid &&
            <Form.Control.Feedback type={'valid'}>
              Correct!
            </Form.Control.Feedback>}
            <Form.Control.Feedback type={'invalid'}>
              {errors.first_name}
            </Form.Control.Feedback>
          </Form.Group>


          <Form.Group controlId="last_name">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter last name"
              name="last_name"
              value={values.last_name}
              onChange={handleChange}
              onBlur={handleBlur}
              isValid={touched.last_name && !errors.last_name}
              isInvalid={!!errors.last_name}
            />
            {isValid &&
            <Form.Control.Feedback type={'valid'}>
              Correct!
            </Form.Control.Feedback>}
            <Form.Control.Feedback type={'invalid'}>
              {errors.last_name}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              isValid={touched.password && !errors.password}
              isInvalid={!!errors.password}
            />
            {isValid &&
            <Form.Control.Feedback type={'valid'}>
              Correct!
            </Form.Control.Feedback>}
            <Form.Control.Feedback type={'invalid'}>
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="is_active">
            <Form.Label>Is active</Form.Label>
            <Form.Check
              custom
              type={"checkbox"}
              id={'is_active'}
            />
            {isValid &&
            <Form.Control.Feedback type={'valid'}>
              Correct!
            </Form.Control.Feedback>}
            <Form.Control.Feedback type={'invalid'}>
              {errors.is_active}
            </Form.Control.Feedback>
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            disabled={isSubmitting}
          >
            Sign in
          </Button>

        </Form>
      )}
    </Formik>
  )
}

const mapDispatchToProps = {
  push,
  updateUserById
}

const mapStateToProps = state => ({
  alert: state.app.alert,
  token: state.authToken.token,
})

export default connect(mapStateToProps, mapDispatchToProps)(EditUserForm)
