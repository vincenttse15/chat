import { WEBSOCKET_URL } from "../environment";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const createConnection = function() {
  const cookie = cookies.get("session");
  const webSocket = new WebSocket(`${WEBSOCKET_URL}/${cookie}`);
  
  return {
    close: function() {
      webSocket.close();
    }
  }
}