import React from 'react'
import { Spinner } from 'react-bootstrap'

export default () => {
  return (
    <Spinner className={"d-flex mx-auto"}
             animation="border"
             role="status"
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
  )
}
