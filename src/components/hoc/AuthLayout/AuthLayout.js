import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default class AuthLayout extends Component {
  render() {
    return (
      <Container className={"h-100 mt-5"}>
        <Row className={"align-items-center justify-content-center h-100"}>
          <Col xs={12} md={4}>
            { this.props.children }
          </Col>
        </Row>
      </Container>
    )
  }
}
