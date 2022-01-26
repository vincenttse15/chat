import React from "react";
import * as specificStyles from "./pendingtab.module.scss";
import * as sharedStyles from "../SharedStyles/addfriendsharedstyles.module.scss";
import FriendRequest from "./FriendRequest/FriendRequest";
import { useSelector } from "react-redux";

const PendingTab = () => {
  const requests = useSelector(state => state.friend.requests);

  return (
    <>
      <div className={sharedStyles.text}>
        <h1>
          PENDING REQUESTS
        </h1>
      </div>
      <div className={specificStyles.requestsContainer}>
        {requests.map((request) => 
          <FriendRequest key={request.from} from={request.from}/>
        )}
      </div>
    </>
  )
}

export default PendingTab;