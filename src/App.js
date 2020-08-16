import React from 'react'
import { Link } from 'react-router-dom'

function App ({ history }) {
  return (
    <>
      <h1 className={"text-center"}>Это главная страница решённого тестового задания</h1>
      <Link className="btn btn-primary" to={"/login"}>Login in</Link>
    </>
  )
}

export default App
