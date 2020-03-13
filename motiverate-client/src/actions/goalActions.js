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

export const goalDelete = goal => {
  const token = localStorage.token;
 fetch(`http://localhost:3000/api/v1/goals/${goal.goalId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ goal })
    });
};

export const goalCreate = goal => {
  const token = localStorage.token;
  return async dispatch => {
    await fetch("http://localhost:3000/api/v1/goals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ goal })
    });
    dispatch(fetchAllGoals());
  };
};

export const goalUpdate = goal => {
  const token = localStorage.token;
  fetch(`http://localhost:3000/api/v1/goals/${goal.goalId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ goal })
  });
  //  .then(dispatch(fetchAllGoals()))
};


