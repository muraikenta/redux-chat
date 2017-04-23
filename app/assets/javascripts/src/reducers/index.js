import { combineReducers } from 'redux'
import messages from './messages'
import userList from './user_list'

const chatApp = combineReducers({
  messages,
  userList,
})

export default chatApp
