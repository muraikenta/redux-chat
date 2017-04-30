import {ActionTypes} from '../constants/app'

const messages = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.MESSAGE__SET_MESSAGES:
      return {
        ...state,
        [action.userId]: action.messages,
      }

    case ActionTypes.MESSAGE__ADD_MESSAGE:
      {
        const {userId, message} = action
        return {
          ...state,
          [userId]: state[userId].concat(message),
        }
      }
    default:
      return state
  }
}

export default messages
