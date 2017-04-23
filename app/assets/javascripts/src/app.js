import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import chatApp from './reducers'
import Header from './components/header'
import Messages from './components/messages'
import UserList from './containers/user_list_container'

const store = createStore(
  chatApp,
  applyMiddleware(logger)
)

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
