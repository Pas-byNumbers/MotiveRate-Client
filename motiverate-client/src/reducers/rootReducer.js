import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
import { goalsReducer } from "./goalsReducer"


const rootReducer = combineReducers({
  users: usersReducer,
  goals: goalsReducer
})

export default rootReducer