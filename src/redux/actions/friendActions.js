import { getFriendsAndRequests } from "../../utility/Friend"

export function loadFriendsAndRequests() {
  return async function loadFriendsAndRequestsThunk(dispatch) {
    const requests = await getFriendsAndRequests();
  }
}