import { addFriendsAndRequestsToStore, addFriendRequestToStore } from "../reducerFunctions/friendReducerFunctions";

const INITIAL_STATE = {
  requests: [],
  friends: [],
};

const LOAD_FRIENDS_AND_REQUESTS = "LOAD_FRIENDS_AND_REQUESTS";
const ADD_FRIEND_REQUEST = "ADD_FRIEND_REQUEST";

export default function friend(state = INITIAL_STATE, action) {
  switch(action.type) {
    case LOAD_FRIENDS_AND_REQUESTS: 
      return addFriendsAndRequestsToStore(state, action.payload);
    case ADD_FRIEND_REQUEST:
      return addFriendRequestToStore(state, action.payload);
    default: 
      return state;
  }
}

