
export const usersReducer = (state = {
  userList: [],
  loading: false,
  currentUser: {}
}, action) => {
  switch (action.type) {
    case 'LOADING_USERS' :
      return {
        ...state,
        userList: [...state.userList],
        loading: true
      }
    case 'RECEIVE_USERS' :
      return {
        ...state,
        userList: action.users,
        loading: false
      }
      case 'LOGIN_USER':
        return {...state, 
          currentUser: action.payload
        }

    default :
      return state
  }
}

