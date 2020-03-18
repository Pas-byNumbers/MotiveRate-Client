export const updatesReducer = (state = {
  updateList: [],
  loading: false,
}, action) => {
  switch (action.type) {
    case 'LOADING_UPDATES' :
      return {
        ...state,
        updateList: [...state.updateList],
        loading: true
      }
    case 'RECEIVE_UPDATES' :
      return {
        ...state,
        updateList: action.updates,
        loading: false
      }
    
    default :
      return state
  }
}