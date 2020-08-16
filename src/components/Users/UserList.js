import React from 'react'
import { connect } from 'react-redux'
import {
  fetchUsers,
  filterUsername,
  sortUsernameBy,
} from '../../redux/actions'
import { Table } from 'react-bootstrap'
import User from './User'
import Loader from '../shared/Loader'
import Search from '../Search'
import { ASC } from '../../redux/types'
import UserListHead from './UserListHead'


class UserList extends React.Component {

  componentDidMount () {
    this.props.fetchUsers()
  }

  searchHandler = (e) => {
    this.props.filterUsername(e.target.value)
  }

  render () {
    if (this.props.loading) {
      return <Loader/>
    }

    const sorted = this.props.users.sort((a, b) => {
      if (a.id < b.id)
        return this.props.sortDirection === ASC ? -1 : 1
      if (a.id > b.id)
        return this.props.sortDirection === ASC ? 1 : -1
      return 0
    })

    return (
      <>
        <Search
          handleChange={this.searchHandler}
          value={this.props.searchValue}
        />
        <Table striped bordered hover responsive>
          <UserListHead />
          <tbody>
          {
            sorted.map(user => <User isHide={
              !user.username
                .toLowerCase()
                .includes(this.props.searchValue
                  .toLowerCase(),
                )
            } user={user} key={user.id}/>)
          }
          </tbody>
        </Table>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users,
    loading: state.app.loading,
    searchValue: state.filters,
    sortDirection: state.sortBy.sortType,
  }
}

const mapDispatchToProps = {
  fetchUsers,
  filterUsername,
  sortUsernameBy,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
