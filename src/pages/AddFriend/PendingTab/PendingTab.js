import React from "react";
import * as specificStyles from "./pendingtab.module.scss";
import * as sharedStyles from "../SharedStyles/addfriendsharedstyles.module.scss";

const PendingTab = () => {
  return (
    <>
      <div className={sharedStyles.text}>
        <h1>
          PENDING REQUESTS
        </h1>
      </div>
    </>
  )
}

export default PendingTab;