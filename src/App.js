import React from 'react'
import { Link } from 'react-router-dom'

function App ({ history }) {
  return (
    <>
      <h1 className={"text-center"}>Hello React</h1>
      <Link to={"/login"}>Login in</Link>
    </>
  )
}

export default App
