const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {
        firstName: action.user.firstName,
        lastName: action.user.lastName,
        email: action.user.email,
      }
    case 'LOGOUT':
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default userReducer;