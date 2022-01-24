import { getFriendsAndRequests } from "../../utility/Friend"

export function loadFriendsAndRequests() {
  return async function loadFriendsAndRequestsThunk(dispatch) {
    const requests = await getFriendsAndRequests();
    if (requests) {
      dispatch({
        type: 'LOAD_FRIENDS_AND_REQUESTS',
        payload: requests.body,
      })
    }
  }
}