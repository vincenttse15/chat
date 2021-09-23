import superagent from "superagent";
import Cookies from "universal-cookie";
import API_URL from "../environment";

const cookies = new Cookies();

export const getUser = async () => {
  const cookie = cookies.get("session");
  const user = await superagent.get(`${API_URL}/getUser`)
    .query({cookie: cookie});
  return user;
}