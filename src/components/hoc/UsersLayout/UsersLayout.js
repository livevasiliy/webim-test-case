import React, { Component } from 'react'
import { Col, Container, Navbar, Row } from 'react-bootstrap'

export default class AuthLayout extends Component {
  render() {
    return (
      <Container fluid>
        <>
          <Navbar bg="dark" variant="dark" className={"mb-5"}>
            <Navbar.Brand href="/">Webim Test-case</Navbar.Brand>
          </Navbar>
        </>
        <Row className={'align-items-center justify-content-center h-100'}>
          <Col xs={12}>
            { this.props.children }
          </Col>
        </Row>
      </Container>
    )
  }
}
