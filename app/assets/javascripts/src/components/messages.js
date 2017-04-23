import React from 'react'
import classNames from 'classNames'
import ReplyBox from '../components/reply_box'

class Messages extends React.Component {

  constructor(props) {
    super(props)
    this.state = this.initialState
  }
  get initialState() {
    return {
      user: {
        profilePicture: 'https://avatars0.githubusercontent.com/u/7922109?v=3&s=460',
        id: 2,
        name: 'Ryan Clark',
        status: 'online',
      },
      lastAccess: {
        recipient: 1424469794050,
        currentUser: 1424469794080,
      },
      messages: [
        {
          contents: 'Hey!',
          from: 2,
          timestamp: 1424469793023,
        },
        {
          contents: 'Hey, what\'s up?',
          from: 1,
          timestamp: 1424469794000,
        },
      ],
    }
  }
  render() {
    const messagesLength = this.state.messages.length
    const currentUserID = 1

    const messages = this.state.messages.map((message, index) => {
      const messageClasses = classNames({
        'message-box__item': true,
        'message-box__item--from-current': message.from === currentUserID,
        'clear': true,
      })

      return (
          <li key={ message.timestamp + '-' + message.from } className={ messageClasses }>
            <div className='message-box__item__contents'>
              { message.contents }
            </div>
          </li>
        )
    })

    const lastMessage = this.state.messages[messagesLength - 1]

    if (lastMessage.from === currentUserID) {
      if (this.state.lastAccess.recipient >= lastMessage.timestamp) {
        const date = lastMessage.timestamp
        messages.push(
            <li key='read' className='message-box__item message-box__item--read'>
              <div className='message-box__item__contents'>
                Read { date }
              </div>
            </li>
          )
      }
    }
    return (
        <div className='message-box'>
          <ul className='message-box__list'>
            { messages }
          </ul>
          <ReplyBox />,
        </div>
      )
  }
}

export default Messages
