import { addFriendsAndRequestsToStore } from "../reducerFunctions/friendReducerFunctions";

const INITIAL_STATE = {
  requests: [],
  friends: [],
};

const LOAD_FRIENDS_AND_REQUESTS = "LOAD_FRIENDS_AND_REQUESTS";

export default function friend(state = INITIAL_STATE, action) {
  switch(action.type) {
    case LOAD_FRIENDS_AND_REQUESTS: 
      return addFriendsAndRequestsToStore(state, action.payload);
    default: 
      return state;
  }
}

