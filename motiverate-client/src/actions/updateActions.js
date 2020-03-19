export const fetchAllUpdates = () => {
  return dispatch => {
    dispatch({ type: "LOADING_UPDATES" });
    fetch("http://localhost:3000/api/v1/updates")
      .then(resp => resp.json())
      .then(updates => {
        dispatch({
          type: "RECEIVE_UPDATES",
          updates: updates.data
        });
      });
  };
};

export const updateDelete = update => {
  const token = localStorage.token;
  return async dispatch => {
    await fetch(`http://localhost:3000/api/v1/updates/${update.updateId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ update })
    });
    dispatch(fetchAllUpdates())
  }
};

export const updateCreate = update => {
  const token = localStorage.token;
  return async dispatch => {
    await fetch("http://localhost:3000/api/v1/updates", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ update })
    });
    dispatch(fetchAllUpdates());
  };
};

export const incrementSupport = updateId => {
  const token = localStorage.token;
  return async dispatch => {
    await fetch(`http://localhost:3000/api/v1/increment-support/${updateId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  });
   dispatch(fetchAllUpdates())
  }
}

export const updateUpdate = update => {
  const token = localStorage.token;
  return async dispatch => {
    await fetch(`http://localhost:3000/api/v1/updates/${update.updateId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ update })
  });
   dispatch(fetchAllUpdates())
  }
};


