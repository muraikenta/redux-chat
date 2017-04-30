import React from 'react'
import {connect} from 'react-redux'
import {createMessage} from '../actions/message'
import Messages from '../components/messages'
import ReplyBox from '../components/reply_box'

const mapStateToProps = (state) => {
  const {messages, userList, session} = state
  const {me = {}} = session
  const {openedUserId} = userList

  return {
    messages: messages[openedUserId],
    meId: me.id,
    openedUserId,
  }
}

class MessageBox extends React.PureComponent {
  render() {
    const {
      messages,
      meId,
      openedUserId,
      dispatch,
    } = this.props
    
    return (
      <div className='message-box'>
        <Messages messages={messages} meId={meId}/>
        <ReplyBox onSubmit={(body) => {dispatch(createMessage(openedUserId, body))}} />,
      </div>
    )
  }
}

export default connect(mapStateToProps)(MessageBox)
