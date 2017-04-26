import React from 'react'
import classNames from 'classNames'

class UserList extends React.PureComponent {
  render() {
    this.props.users.sort((a, b) => {
      if (a.lastMessage.timestamp > b.lastMessage.timestamp) {
        return -1
      }
      if (a.lastMessage.timestamp < b.lastMessage.timestamp) {
        return 1
      }
      return 0
    })

    const messages = this.props.users.map((message, index) => {
      const date = message.lastMessage.timestamp

      var statusIcon
      if (message.lastMessage.from !== message.user.id) {
        statusIcon = (
          <i className='fa fa-reply user-list__item__icon' />
        )
      }
      if (message.lastAccess.currentUser < message.lastMessage.timestamp) {
        statusIcon = (
          <i className='fa fa-circle user-list__item__icon' />
        )
      }

      var isNewMessage = false
      if (message.lastAccess.currentUser < message.lastMessage.timestamp) {
        isNewMessage = true
      }

      const itemClasses = classNames({
        'user-list__item': true,
        'clear': true,
        'user-list__item--new': isNewMessage,
        'user-list__item--active': this.props.openedUserId === message.user.id,
      })

      return (
        <li
          className={ itemClasses }
          key={ message.user.id }
          onClick={ this.props.onClickItem.bind(null, message.user.id) }
        >
          <div className='user-list__item__picture'>
            <img src={ message.user.profilePicture } />
          </div>
          <div className='user-list__item__details'>
            <h4 className='user-list__item__name'>
              { message.user.name }
              <abbr className='user-list__item__timestamp'>
                { date }
              </abbr>
            </h4>
            <span className='user-list__item__message'>
              { statusIcon } { message.lastMessage.contents }
            </span>
          </div>
        </li>
      )
    }, this)
    return (
      <div className='user-list'>
        <ul className='user-list__list'>
          { messages }
        </ul>
      </div>
    )
  }
}

export default UserList
