import superagent from "superagent";
import Cookies from "universal-cookie";
import { API_URL } from "../environment";

const cookies = new Cookies();

export const getFriendsAndRequests = async () => {
  const cookie = cookies.get("session");
  const requests = await superagent.get(`${API_URL}/getRequests`)
    .query({ cookie: cookie });
  return requests;
};

export const acceptFriendRequest = async (from, to) => {
  console.log(from, to);
  const added = await superagent.post(`${API_URL}/acceptFriendRequest`)
    .send({ to: to })
    .send({ from: from });

  return added;
};