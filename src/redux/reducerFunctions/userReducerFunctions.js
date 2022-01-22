export const addUserToStore = (state, payload) => {
  return {
    ...state,
    firstName: payload.firstName,
    lastName: payload.lastName,
    email: payload.email,
  }  
}