import { WEBSOCKET_URL } from "../environment";
import Cookies from "universal-cookie";
import { addFriendRequest, addNewFriend } from "../redux/actions/friendActions";
import { store } from "../index";

const cookies = new Cookies();
const FRIEND_REQUEST = "FRIEND_REQUEST";
const ADD_NEW_FRIEND = "ADD_NEW_FRIEND";

export const createConnection = function() {
  const cookie = cookies.get("session");
  const webSocket = new WebSocket(`${WEBSOCKET_URL}/${cookie}`);
  
  webSocket.onmessage = function(e) {
    const message = JSON.parse(e.data);
    
    switch(message.type) {
      case FRIEND_REQUEST:
        store.dispatch(addFriendRequest(message));  
        break;
      case ADD_NEW_FRIEND:
        store.dispatch(addNewFriend(message));
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