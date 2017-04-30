import {ActionTypes} from '../constants/app'
import api from '../lib/api'

export const setMessages = (userId, messages) => {
  return {
    type: ActionTypes.MESSAGE__SET_MESSAGES,
    userId,
    messages,
  }
}

const addMessage = (userId, message) => {
  return {
    type: ActionTypes.MESSAGE__ADD_MESSAGE,
    userId,
    message,
  }
}

export const createMessage = (userId, body) => (dispatch) => {
  api.post('/messages', {userId, body})
     .then((json) => { dispatch(addMessage(userId, json.data.message)) })
     .catch(() => {
       // TODO: dispatch failure
     })
}
