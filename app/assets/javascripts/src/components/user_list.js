import React from 'react'
import classNames from 'classNames'

class UserList extends React.PureComponent {
  render() {
    const {
      users,
      openedUserId,
      onClickItem,
    } = this.props

    const userItems = users.map((user) => {
      const itemClasses = classNames({
        'user-list__item': true,
        'clear': true,
        'user-list__item--new': false,
        'user-list__item--active': openedUserId === user.id,
      })

      return (
        <li
          className={ itemClasses }
          key={ user.id }
          onClick={ onClickItem.bind(null, user.id) }
        >
          <div className='user-list__item__picture'>
            <img src={ user.profilePicture } />
          </div>
          <div className='user-list__item__details'>
            <h4 className='user-list__item__name'>
              { user.email }
            </h4>
          </div>
        </li>
      )
    })

    return (
      <div className='user-list'>
        <ul className='user-list__list'>
          { userItems }
        </ul>
      </div>
    )
  }
}

export default UserList
