import {ActionTypes} from '../constants/app'

const initialState = {
  openedUserId: 0,
  users: [
    {
      lastMessage: {
        contents: 'Hey, what\'s up?',
        from: 1,
        timestamp: 1424469794000,
      },
      lastAccess: {
        recipient: 1424469794050,
        currentUser: 1424469794080,
      },
      user: {
        profilePicture: 'https://avatars0.githubusercontent.com/u/7922109?v=3&s=460',
        id: 2,
        name: 'Ryan Clark',
        status: 'online',
      },
    },
    {
      lastMessage: {
        contents: 'Want a game of ping pong?',
        from: 3,
        timestamp: 1424352522000,
      },
      lastAccess: {
        recipient: 1424352522000,
        currentUser: 1424352522080,
      },
      user: {
        read: true,
        profilePicture: 'https://avatars3.githubusercontent.com/u/2955483?v=3&s=460',
        name: 'Jilles Soeters',
        id: 3,
        status: 'online',
      },
    },
    {
      lastMessage: {
        contents: 'Please follow me on twitter I\'ll pay you',
        timestamp: 1424423579000,
        from: 4,
      },
      lastAccess: {
        recipient: 1424423579000,
        currentUser: 1424423574000,
      },
      user: {
        name: 'Todd Motto',
        id: 4,
        profilePicture: 'https://avatars1.githubusercontent.com/u/1655968?v=3&s=460',
        status: 'online',
      },
    },
  ],
}

const userList = (state = initialState, action) => {
  switch (action.type) {
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
