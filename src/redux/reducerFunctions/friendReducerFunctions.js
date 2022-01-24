export const addFriendsAndRequestsToStore = (state, payload) => {
  console.log(payload);
  
  return {
    ...state,
    requests: payload,
  }
};