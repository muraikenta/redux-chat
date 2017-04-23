import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import chatApp from './reducers'
import Header from './components/header'
import Messages from './components/messages'
import UserList from './components/user_list'

const store = createStore(chatApp)

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
