import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
import { goalsReducer } from "./goalsReducer"
import { updatesReducer } from "./updatesReducer"


const rootReducer = combineReducers({
  users: usersReducer,
  goals: goalsReducer,
  updates: updatesReducer
})

export default rootReducer