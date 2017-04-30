import api from '../lib/api'
import {ActionTypes} from '../constants/app'
import {setMessages} from '../actions/message'

export const setUsers = (users) => {
  return {
    type: ActionTypes.USER__SET_USERS,
    users,
  }
}

export const updateOpenedUserId = (userId)  => {
  return {
    type: ActionTypes.USER__UPDATE_OPENED_ID,
    userId,
  }
}

export const openUser = (userId) => (dispatch) => {
  dispatch(updateOpenedUserId(userId))
  api.get('/messages', {params: {user_id: userId}})
     .then((json) => { dispatch(setMessages(userId, json.data.messages)) })
}

export const initChat = () => (dispatch) => {
  api.get('/users/friends')
     .then((json) => {
       const {users} = json.data
       dispatch(setUsers(users))
       if (users.length > 0) {
         dispatch(openUser(users[0].id))
       }
     })

}
