import React from 'react'
import { Badge } from 'react-bootstrap'

export const User = ({ user, isHide }) => {
  return (
    <tr className={isHide === true ? 'd-none' : ''}>
      <td>{user.id}</td>
      <td>{user.username}</td>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td>
        {
          user.is_active === true
            ? <Badge variant={"success"}>Active</Badge>
            : <Badge variant={'danger'}>Not active</Badge>
        }
      </td>
      <td>{ new Date(user.last_login).toLocaleTimeString() }</td>
      <td>
        {
          user.is_superuser === true
            ? <Badge variant={'success'}>Yes</Badge>
            : <Badge variant={'danger'}>No</Badge>
        }
      </td>
    </tr>
  )
}
export default User
