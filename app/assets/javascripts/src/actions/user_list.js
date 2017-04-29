import {ActionTypes} from '../constants/app'

export const setUsers = (users) => {
  return {
    type: ActionTypes.USER__SET_USERS,
    users,
  }
}

export const updateOpenedUserId = (userId) => {
  return {
    type: ActionTypes.USER__UPDATE_OPENED_ID,
    userId,
  }
}
