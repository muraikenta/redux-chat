import React from 'react'

const EnterKeyCode = 13

class ReplyBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}
  }

  onChange(e) {
    this.setState({value: e.target.value})
  }

  onKeyDown(e) {
    if (e.keyCode === EnterKeyCode) {
      this.props.onSubmit(e.target.value)
      this.setState({value: ''})
    }
  }

  render() {
    return (
      <div className='reply-box'>
        <input
          className='reply-box__input'
          placeholder='Type message to reply..'
          value={this.state.value}
          onChange={(e) => { this.onChange(e) }}
          onKeyDown={(e) => { this.onKeyDown(e) }}
        />
        <span className='reply-box__tip'>
          Press <span className='reply-box__tip__button'>Enter</span> to send
        </span>
      </div>
    )
  }
}

export default ReplyBox
