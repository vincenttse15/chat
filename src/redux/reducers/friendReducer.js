const INITIAL_STATE = {
  receivedRequests: [],
  friends: [],
};

const LOAD_FRIENDS_AND_REQUESTS = "LOAD_FRIENDS_AND_REQUESTS";

export default function friend(state = INITIAL_STATE, action) {
  switch(action.type) {
    case LOAD_FRIENDS_AND_REQUESTS: 
      return state;
    default: 
      return state;
  }
}

