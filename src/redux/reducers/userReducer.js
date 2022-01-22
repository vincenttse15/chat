import { addUserToStore } from "../reducerFunctions/userReducerFunctions";

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  email: "",
};

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return addUserToStore(state, action.payload);
    case LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};