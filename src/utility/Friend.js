import superagent from "superagent";
import Cookies from "universal-cookie";
import { API_URL } from "../environment";

const cookies = new Cookies();

export const getRequests = async () => {
  const cookie = cookies.get("session");
  const requests = await superagent.get(`${API_URL}/getRequests`)
    .query({ cookie: cookie });
  return requests;
};

export const getFriends = async () => {
  const cookie = cookies.get("session");
  const friends = await superagent.get(`${API_URL}/getFriends`)
    .query({ cookie: cookie });
  console.log(friends);
  return friends;
};

export const acceptFriendRequest = async (from, to) => {
  const added = await superagent.post(`${API_URL}/acceptFriendRequest`)
    .send({ to: to })
    .send({ from: from });

  return added;
};

export const declineFriendRequest = async (from, to) => {
  const removed = await superagent.post(`${API_URL}/declineFriendRequest`)
    .send({ to: to })
    .send({ from: from });
  
  return removed;
}