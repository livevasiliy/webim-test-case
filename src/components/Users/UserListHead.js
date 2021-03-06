import React from 'react'
import { connect } from 'react-redux'
import { sortUsernameBy } from '../../redux/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { ASC, DESC } from '../../redux/types'
import './Users.css'

export const UserListHead = (props) => {
  const onSort = sortDirection => {
    props.sortUsernameBy(sortDirection)
  }

  return (
    <thead>
    <tr>
      {
        props.users
          .slice(0, 1)
          .map(user => Object
            .keys(user)
            .map(key => (
                <th
                  key={key}
                  className={'align-middle'}
                >
                  <span className={'mx-2'}>{key}</span>
                  {key === 'id' ? (
                    <>
                      <FontAwesomeIcon
                        className={
                          props.sortDirection === ASC
                            ? 'active mx-2'
                            : 'mx-2 align-middle'
                        }
                        icon={faAngleUp}
                        onClick={() => key === 'id'
                          ? onSort(ASC)
                          : null}
                      />
                      <FontAwesomeIcon
                        className={props.sortDirection === DESC
                          ? 'active mx-2'
                          : 'mx-2 align-middle'}
                        icon={faAngleDown}
                        onClick={() => key === 'id'
                          ? onSort(DESC)
                          : null}
                      />
                    </>
                  ) : null}
                </th>
              ),
            ),
          )
      }
    </tr>
    </thead>
  )
}



const mapStateToProps = state => {
  return {
    users: state.users.users,
    sortDirection: state.sortBy.sortType,
  }
}

export default connect(mapStateToProps, {
  sortUsernameBy,
})(UserListHead)
