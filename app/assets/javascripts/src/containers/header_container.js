import React from 'react'
import {connect} from 'react-redux'
import Header from '../components/header'

const mapStateToProps = (state) => {
  const {me = {}} = state.session
  return {
    userName: me.name,
  }
}

export default connect(mapStateToProps)(Header)
