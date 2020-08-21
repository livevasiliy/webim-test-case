import React from 'react'
import { Card } from 'react-bootstrap'
import LoginForm from '../components/Auth/LoginForm'

export default () => {
  return (
    <Card border={'primary'}>
      <Card.Body>
        <LoginForm/>
      </Card.Body>
    </Card>
  )
}
