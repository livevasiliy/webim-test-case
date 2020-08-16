import React from 'react'
import { connect } from 'react-redux'
import { sortUsernameBy } from '../../redux/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { ASC, DESC } from '../../redux/types'


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
                <th key={key}>
                  <span className={'mr-2'}>{key}</span>
                  {key === 'id' ? (
                    <>
                      <FontAwesomeIcon
                        className={"mx-2"}
                        icon={faAngleUp}
                        onClick={() => key === 'id'
                          ? onSort(ASC)
                          : null}
                      />
                      <FontAwesomeIcon
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
      <th>Actions</th>
    </tr>
    </thead>
  )
}

export default connect(null, {
  sortUsernameBy
})(UserListHead)
