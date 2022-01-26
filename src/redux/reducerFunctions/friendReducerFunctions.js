export const addFriendsAndRequestsToStore = (state, payload) => {
  return {
    ...state,
    requests: payload,
  }
};

export const addFriendRequestToStore = (state, payload) => {
  let requestsCopy = state.requests.slice();
  requestsCopy.unshift({from: payload.from});

  return {
    ...state,
    requests: requestsCopy,
  }
};