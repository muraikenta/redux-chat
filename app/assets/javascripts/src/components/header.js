import React from 'react'
import HttpRequest from '../lib/http_request'

class Header extends React.Component {
  render() {
    return (
        <header className='header'>
          <div onClick={() => {HttpRequest.delete('/users/sign_out')}}>ログアウト</div>
        </header>
      )
  }
}

export default Header
