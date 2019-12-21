
export const usersReducer = (state = {
  userList: [],
  loading: false
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

    default :
      return state
  }
}

