const loginUser = userObj => ({
  type: "LOGIN_USER",
  payload: userObj
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
})

export const fetchAllUsers = () => {
  return dispatch => {
    dispatch({ type: "LOADING_USERS" });
    fetch("http://localhost:3000/api/v1/users")
      .then(resp => resp.json())
      .then(users => {
        dispatch({
          type: "RECEIVE_USERS",
          users: users.data
        });
      });
  };
};

export const userCreate = user => {
  return async dispatch => {
    const resp = await fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ user })
    });
    const credentials = await resp.json();
    if (credentials.message) {
      alert(credentials.message);
      // Here you should have logic to handle invalid creation of a user.
      // This assumes your Rails API will return a JSON object with a key of
      // 'message' if there is an error with creating the user, i.e. invalid username
    } else {
      localStorage.setItem("token", credentials.jwt);
      dispatch(loginUser(credentials.user));
    }
  };
};

export const userUpdate = user => {
  const token = localStorage.token
  return async dispatch => {
    const resp = await fetch(`http://localhost:3000/api/v1/users/${user.userID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ user })
      })
      const credentials = await resp.json();
    if (credentials.message) {
      alert(credentials.message);
      // Here you should have logic to handle invalid creation of a user.
      // This assumes your Rails API will return a JSON object with a key of
      // 'message' if there is an error with creating the user, i.e. invalid username
    } else {
      localStorage.setItem("token", credentials.jwt);
      dispatch(loginUser(credentials.user));
    } 
  }
}

export const userDelete = user => {
  const token = localStorage.token
  return async dispatch => {
    const resp = await fetch(`http://localhost:3000/api/v1/users/${user.userID}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }
}

export const userLogInFetch = user => {
  return async dispatch => {
    const resp = await fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ user })
    });
    const credentials = await resp.json();
    if (credentials.message) {
      // Here you should have logic to handle invalid login credentials.
      // This assumes your Rails API will return a JSON object with a key of
      // 'message' if there is an error
      alert(credentials.message);
    } else {
      localStorage.setItem("token", credentials.jwt);
      dispatch(loginUser(credentials.user));
    }
  };
};

export const getProfileFetch = () => {
  return async dispatch => {
    const token = localStorage.token;
    if (token) {
      const resp = await fetch("http://localhost:3000/api/v1/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`
        }
      });
      const credentials = await resp.json();
      if (credentials.message) {
        // An error will occur if the token is invalid.
        // If this happens, you may want to remove the invalid token.
        localStorage.removeItem("token");
      } else {
        dispatch(loginUser(credentials.user));
      }
    }
  };
};
