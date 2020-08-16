import React from 'react'
import { ASC } from '../../redux/types'
import User from './User'
import { fetchUsers, filterUsername, sortUsernameBy } from '../../redux/actions'
import { connect } from 'react-redux'

export const UserListBody = ({ users, sortDirection, searchValue } ) => {

  const sorted = users.sort((a, b) => {
    if (a.id < b.id)
      return sortDirection === ASC ? -1 : 1
    if (a.id > b.id)
      return sortDirection === ASC ? 1 : -1
    return 0
  })

  return (
    <tbody>
    {
      sorted.map(user => <User isHide={
        !user.username
          .toLowerCase()
          .includes(searchValue
            .toLowerCase(),
          )
      } user={user} key={user.id}/>)
    }
    </tbody>
  )
}

const mapStateToProps = state => {
  return {
    users: state.users.users,
    loading: state.app.loading,
    searchValue: state.filter,
    sortDirection: state.sortBy.sortType,
  }
}

const mapDispatchToProps = {
  fetchUsers,
  filterUsername,
  sortUsernameBy,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListBody)
