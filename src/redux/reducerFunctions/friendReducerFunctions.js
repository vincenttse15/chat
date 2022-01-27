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

export const addNewFriendToStore = (state, payload) => {
  let friendsCopy = state.friends.slice();
  friendsCopy.push({
    firstName: payload.firstName,
    lastName: payload.lastName,
    email: payload.email,
  });

  friendsCopy.sort();

  return {
    ...state,
    friends: friendsCopy,
  };
};

export const removeFriendRequestFromStore = (state, payload) => {
  return {
    ...state,
    requests: state.requests.filter((request) => request.from !== payload),
  };
};