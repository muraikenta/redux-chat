import React from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import HttpRequest from '../lib/http_request'

class Header extends React.Component {
  render() {
    const {userName} = this.props
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">ReactChat</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem>{userName}</NavItem>
          <NavItem onClick={() => {HttpRequest.delete('/users/sign_out')}}>
            ログアウト
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default Header
