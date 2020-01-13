export const fetchUsers = () => {
  return dispatch => {
    dispatch({ type: 'LOADING_USERS' });
    fetch('http://localhost:3000/api/v1/users')
    .then(resp => resp.json())
    .then(users => {
      dispatch({ 
        type: 'RECEIVE_USERS', 
        users: users.data
      })
    })
  }
}

export const userCreate = user => {
  return async dispatch => {
    const resp = await fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ user })
    });
    const credentials = await resp.json();
    if (credentials.message) {
      alert(credentials.message)
      // Here you should have logic to handle invalid creation of a user.
      // This assumes your Rails API will return a JSON object with a key of
      // 'message' if there is an error with creating the user, i.e. invalid username
    }
    else {
      localStorage.setItem("token", credentials.jwt);
      dispatch(loginUser(credentials.user));
    }
  }
}

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})