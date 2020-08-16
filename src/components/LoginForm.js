import React from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { setAuthToken } from '../redux/actions'
import { push } from 'connected-react-router'
import { Formik } from 'formik'
import * as yup from 'yup'

const schema = yup.object().shape({
  username: yup
    .string()
    .required("Is required")
    .min(1)
    .max(150)
    .matches(/^[\w.@+-]+$/, "Letters, digits and @/./+/-/_ only"),
  password: yup
    .string()
    .required("Is required")
    .min(1)
    .max(128)
    .matches(/^(?=.*[A-Z])(?=.*\d).{8,}$/, "Password should stated uppercase, contain digits"),
})

const LoginForm = (props) => {
    return (
      <Formik
        validationSchema={schema}
        initialValues={{
          username: 'test_super',
          password: 'Nf<U4f<rDbtDxAPn'
        }}
        onSubmit={async ( values, { setSubmitting }) => {
          const status = props.setAuthToken(values)
          if (status && props.token) {
            props.push('/users')
          }
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
            {props.alert && <Alert variant={"danger"}>{props.alert}</Alert>}
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
              <Form.Control.Feedback type={"valid"}>
                Correct!
              </Form.Control.Feedback>}
              <Form.Control.Feedback type={"invalid"}>
                { errors.username }
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.password && !errors.password}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type={"valid"}>
                Correct!
              </Form.Control.Feedback>
              <Form.Control.Feedback type={"invalid"}>
                { errors.password }
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
  setAuthToken,
  push,
}

const mapStateToProps = state => ({
  alert: state.app.alert,
  token: state.authToken.token
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
