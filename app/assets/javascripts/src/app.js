import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import chatApp from './reducers'
import api from './lib/api'
import {setUsers} from './actions/user_list'
import Header from './components/header'
import Messages from './components/messages'
import UserList from './containers/user_list_container'

const store = createStore(
  chatApp,
  applyMiddleware(logger)
)

api.get('/users/friends')
   .then((json) => { store.dispatch(setUsers(json.data.users)) })

render(
  <Provider store={store}>
    <div>
      <Header />
      <UserList />
      <Messages />
    </div>
  </Provider>,
  document.getElementById('react-root')
)
