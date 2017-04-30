import React from 'react'
import HttpRequest from '../lib/http_request'

class Header extends React.Component {
  render() {
    const {userName} = this.props
    return (
      <header className='header'>
        <h1>ChatApp</h1>
        <ul>
          <li>{userName}</li>
          <li>
            <a onClick={() => {HttpRequest.delete('/users/sign_out')}}>
              ログアウト
            </a>
          </li>
        </ul>
      </header>
    )
  }
}

export default Header
