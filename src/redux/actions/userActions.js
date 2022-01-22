import { getUser } from "../../utility/User";

export function login() {
  return async function loginThunk(dispatch, getState) {
    const user = await getUser();
    if (user !== undefined) {
      dispatch({
        type: 'LOGIN',
        payload: user.body,
      })
    } else {
      dispatch({
        type: 'LOGOUT',
      })
    }
  }
}

export function logout() {
  return async function logoutThunk(dispatch, getState) {
    dispatch({
      type: 'LOGOUT'
    })
  }
}