import { WEBSOCKET_URL } from "../environment";

export const createConnection = function() {
  const webSocket = new WebSocket(WEBSOCKET_URL);

  return {
    close: function() {
      webSocket.close();
    }
  }
}