import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const NotFound = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className={"text-center"}>Not found 404</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound
