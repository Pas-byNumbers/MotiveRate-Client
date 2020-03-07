export const fetchAllGoals = () => {
  return dispatch => {
    dispatch({ type: "LOADING_GOALS" });
    fetch("http://localhost:3000/api/v1/goals")
      .then(resp => resp.json())
      .then(goals => {
        dispatch({
          type: "RECEIVE_GOALS",
          goals: goals.data
        });
      });
  };
};

export const goalCreate = goal => {
  return async dispatch => {
    const resp = await fetch("http://localhost:3000/api/v1/goals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ goal })
    })
  }
}