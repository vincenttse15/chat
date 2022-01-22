import React from "react";
import * as styles from './addfriend.module.scss';
import AddFriendTab from "./AddFriendTab/AddFriendTab";
import PendingTab from "./PendingTab/PendingTab";

const AddFriend = () => {
  const [tab, setTab] = React.useState('AddFriend');

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button type="button" onClick={() => setTab('AddFriend')} className={`${styles.button} ${tab === 'AddFriend' ? `${styles.activeTab}` : ''}`}>Add Friend</button>
        <button type="button" onClick={() => setTab('Pending')} className={`${styles.button} ${tab === 'Pending' ? `${styles.activeTab}` : ''}`}>Pending</button>
      </div>
      {tab === 'AddFriend' ? 
        <AddFriendTab />
        :
        <PendingTab />
      }
    </div>
  );
}

export default AddFriend;