import {ActionTypes} from '../constants/app'

const initialState = {
  me: {},
}

const session = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SESSION__SET_USER:
      return {
        ...state,
        me: action.me,
      }

    default:
      return state
  }
}

export default session
