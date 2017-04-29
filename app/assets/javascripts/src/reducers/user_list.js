import {ActionTypes} from '../constants/app'

const initialState = {
  openedUserId: null,
  users: [],
}

const userList = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.USER__SET_USERS:
      return {
        ...state,
        users: action.users,
        openedUserId: state.openedUserId || action.users[0].id,
      }
    case ActionTypes.USER__UPDATE_OPENED_ID:
      return {
        ...state,
        openedUserId: action.userId,
      }
    default:
      return state
  }
}

export default userList
