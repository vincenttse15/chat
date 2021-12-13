import { getUser } from "../../utility/User";

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        firstName: action.action.firstName,
        lastName: action.action.lastName,
        email: action.action.email,
      }
    case 'LOGOUT':
      return INITIAL_STATE;
    default:
      return state;
  }
};

export function login() {
  return async function loginThunk(dispatch, getState) {
    const user = await getUser();
    if (user !== undefined) {
      dispatch({
        type: 'LOGIN',
        action: user.body,
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