export const addRequestsToStore = (state, payload) => {
  return {
    ...state,
    requests: payload,
  }
};

export const addFriendsToStore = (state, payload) => {
  payload.sort((a, b) => {
    let user1 = a.firstName + " " + a.lastName;
    let user2 = b.firstName + " " + b.lastName;
    return user1.localeCompare(user2);
  });
  
  return {
    ...state,
    friends: payload,
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

export const removeFriendFromStore = (state, payload) => {
  return {
    ...state,
    friends: state.friends.filter((friend) => friend.email !== payload),
  };
};