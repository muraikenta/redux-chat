import {connect} from 'react-redux'
import {updateOpenedUserId} from '../actions/user_list'
import UserList from '../components/user_list'

const mapStateToProps = (state) => {
  return state.userList
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickItem: (userId) => {
      dispatch(updateOpenedUserId(userId))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
