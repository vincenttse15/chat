import {
  addFriendsAndRequestsToStore,
  addFriendRequestToStore,
  addNewFriendToStore,
  removeFriendRequestFromStore,
} from "../reducerFunctions/friendReducerFunctions";

const INITIAL_STATE = {
  requests: [],
  friends: [],
};

const LOAD_FRIENDS_AND_REQUESTS = "LOAD_FRIENDS_AND_REQUESTS";
const ADD_FRIEND_REQUEST = "ADD_FRIEND_REQUEST";
const ADD_NEW_FRIEND = "ADD_NEW_FRIEND";
const REMOVE_FRIEND_REQUEST = "REMOVE_FRIEND_REQUEST";

export default function friend(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_FRIENDS_AND_REQUESTS:
      return addFriendsAndRequestsToStore(state, action.payload);
    case ADD_FRIEND_REQUEST:
      return addFriendRequestToStore(state, action.payload);
    case ADD_NEW_FRIEND:
      return addNewFriendToStore(state, action.payload);
    case REMOVE_FRIEND_REQUEST: 
      return removeFriendRequestFromStore(state, action.payload);
    default:
      return state;
  }
}

