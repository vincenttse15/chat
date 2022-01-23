import superagent from "superagent";
import Cookies from "universal-cookie";
import { API_URL } from "../environment";

const cookies = new Cookies();

export const getFriendsAndRequests = async () => {
  const cookie = cookies.get("session");
  const requests = await superagent.get(`${API_URL}/getRequests`)
    .query({cookie: cookie});
  console.log(requests);
};