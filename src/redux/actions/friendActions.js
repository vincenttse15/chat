import { getFriendsAndRequests } from "../../utility/Friend"

export function loadFriendsAndRequests() {
  return async function loadFriendsAndRequestsThunk(dispatch) {
    const requests = await getFriendsAndRequests();
    if (requests) {
      dispatch({
        type: "LOAD_FRIENDS_AND_REQUESTS",
        payload: requests.body,
      })
    }
  }
}

export function addFriendRequest(message) {
  return async function addFriendRequest(dispatch) {
    dispatch({
      type: "ADD_FRIEND_REQUEST",
      payload: message,
    })
  }
}

export function addNewFriend(friend) {
  return async function addNewFriend(dispatch) {
    dispatch({
      type: "ADD_NEW_FRIEND",
      payload: friend,
    })
  }
}

export function removeFriendRequest(from) {
  return async function removeFriendRequest(dispatch) {
    dispatch({
      type: "REMOVE_FRIEND_REQUEST",
      payload: from,
    })
  }
}