import {ActionTypes} from '../constants/app'
import api from '../lib/api'

const setMe = (me) => {
  return {
    type: ActionTypes.SESSION__SET_USER,
    me,
  }
}

export const fetchMe = () => (dispatch) => {
  api.get('/me')
     .then((json) => { dispatch(setMe(json.data.me)) })
     .catch(() => {
       // TODO: dispatch failure
     })
}
