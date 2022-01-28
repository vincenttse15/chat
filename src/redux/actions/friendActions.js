import { getRequests, getFriends } from "../../utility/Friend"

export function loadRequests() {
  return async function loadRequests(dispatch) {
    const requests = await getRequests();
    if (requests) {
      dispatch({
        type: "LOAD_REQUESTS",
        payload: requests.body,
      })
    }
  }
}

export function loadFriends() {
  return async function loadFriends(dispatch) {
    const friends = await getFriends();
    if (friends) {
      dispatch({
        type: "LOAD_FRIENDS",
        payload: friends.body,
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