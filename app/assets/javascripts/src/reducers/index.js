import { combineReducers } from 'redux'
import session from './session'
import messages from './messages'
import userList from './user_list'

const chatApp = combineReducers({
  session,
  messages,
  userList,
})

export default chatApp
