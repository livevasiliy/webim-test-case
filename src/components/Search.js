import React from 'react'
import { Form } from 'react-bootstrap'

const Search = (props) => {
  return (
    <Form.Control
      type="text"
      placeholder="Enter username for search"
      name="username"
      value={props.value}
      onChange={props.handleChange}
    />
  )
}

export default Search
