import React from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import HttpRequest from '../lib/http_request'

const styles = {
  image: {
    float: 'left',
    marginTop: 5,
    width: 40,
    borderRadius: '50%',
  }
}

class Header extends React.Component {
  render() {
    const {userName, userImage} = this.props
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">ReactChat</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <img src={userImage} style={styles.image} />
          <NavItem>
            {userName}
          </NavItem>
          <NavItem onClick={() => {HttpRequest.delete('/users/sign_out')}}>
            ログアウト
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default Header
