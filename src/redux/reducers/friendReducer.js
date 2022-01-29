import {
  addRequestsToStore,
  addFriendRequestToStore,
  addNewFriendToStore,
  removeFriendRequestFromStore,
  addFriendsToStore,
  removeFriendFromStore,
} from "../reducerFunctions/friendReducerFunctions";

const INITIAL_STATE = {
  requests: [],
  friends: [],
};

const LOAD_REQUESTS = "LOAD_REQUESTS";
const LOAD_FRIENDS = "LOAD_FRIENDS";
const ADD_FRIEND_REQUEST = "ADD_FRIEND_REQUEST";
const ADD_NEW_FRIEND = "ADD_NEW_FRIEND";
const REMOVE_FRIEND_REQUEST = "REMOVE_FRIEND_REQUEST";
const REMOVE_FRIEND = "REMOVE_FRIEND";

export default function friend(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_REQUESTS:
      return addRequestsToStore(state, action.payload);
    case LOAD_FRIENDS:
      return addFriendsToStore(state, action.payload);
    case ADD_FRIEND_REQUEST:
      return addFriendRequestToStore(state, action.payload);
    case ADD_NEW_FRIEND:
      return addNewFriendToStore(state, action.payload);
    case REMOVE_FRIEND_REQUEST: 
      return removeFriendRequestFromStore(state, action.payload);
    case REMOVE_FRIEND:
      return removeFriendFromStore(state, action.payload);
    default:
      return state;
  }
}

