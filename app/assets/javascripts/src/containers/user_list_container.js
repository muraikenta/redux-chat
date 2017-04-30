import {connect} from 'react-redux'
import api from '../lib/api'
import {openUser} from '../actions/user_list'
import {setMessages} from '../actions/message'
import UserList from '../components/user_list'

const mapStateToProps = (state) => {
  return state.userList
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickItem: (userId) => {
      dispatch(openUser(userId))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
