import './lib/lodash_mixin'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import chatApp from './reducers'
import api from './lib/api'
import {fetchMe} from './actions/session'
import {initChat} from './actions/user_list'
import Header from './containers/header_container'
import Messages from './containers/messages_container'
import UserList from './containers/user_list_container'

const rootElement = document.getElementById('react-root')

if (rootElement) {
  const store = createStore(
    chatApp,
    applyMiddleware(thunk, logger),
  )

  store.dispatch(fetchMe())
  store.dispatch(initChat())

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
}
