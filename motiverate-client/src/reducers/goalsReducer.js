export const goalsReducer = (state = {
  goalList: [],
  loading: false,
}, action) => {
  switch (action.type) {
    case 'LOADING_GOALS' :
      return {
        ...state,
        goalList: [...state.goalList],
        loading: true
      }
    case 'RECEIVE_GOALS' :
      return {
        ...state,
        goalList: action.goals,
        loading: false
      }
    
    default :
      return state
  }
}