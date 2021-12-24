import { WEBSOCKET_URL } from "../environment";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const createConnection = function() {
  const cookie = cookies.get("session");
  const webSocket = new WebSocket(`${WEBSOCKET_URL}/${cookie}`);
  
  webSocket.onmessage = function(e) {
    const message = JSON.parse(e.data);
    
    switch(message.type) {
      case 'FRIEND_REQUEST':
        console.log(message);
        break;
      default:
        console.log("Error with message.");
    }
  }

  return {
    close: function() {
      webSocket.close();
    }
  }
}