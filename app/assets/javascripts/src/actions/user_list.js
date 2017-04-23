import {ActionTypes} from '../constants/app'

export const updateOpenedUserId = (userId) => {
  return {
    type: ActionTypes.USER__UPDATE_OPENED_ID,
    userId,
  }
}
