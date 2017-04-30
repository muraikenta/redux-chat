import React from 'react'
import classNames from 'classNames'

class Messages extends React.PureComponent {
  render() {
    const {messages, currentUserId} = this.props

    if (!messages) {
      return <div/>
    }

    const messagesElement = messages.map((message) => {
      const messageClasses = classNames({
        'message-box__item': true,
        'message-box__item--from-current': message.fromUserId === currentUserId,
        'clear': true,
      })

      return (
          <li key={ message.id } className={ messageClasses }>
            <div className='message-box__item__contents'>
              { message.body }
            </div>
          </li>
        )
    })

    // const lastMessage = messages[messagesLength - 1]

    // if (lastMessage.from === currentUserID) {
    //   if (this.state.lastAccess.recipient >= lastMessage.timestamp) {
    //     const date = lastMessage.timestamp
    //     messages.push(
    //         <li key='read' className='message-box__item message-box__item--read'>
    //           <div className='message-box__item__contents'>
    //             Read { date }
    //           </div>
    //         </li>
    //       )
    //   }
    // }
    return (
      <ul className='message-box__list'>
        { messagesElement }
      </ul>
    )
  }
}

export default Messages
