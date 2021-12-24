import React from "react";
import * as styles from './addfriend.module.scss';
import AddFriendTab from "./AddFriendTab/AddFriendTab";

const AddFriend = () => {
  const [tab, setTab] = React.useState('AddFriend');

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button type="button" onClick={() => setTab('AddFriend')} className={styles.button}>Add Friend</button>
        <button type="button" onClick={() => setTab('Pending')} className={styles.button}>Pending</button>
      </div>
      {tab === 'AddFriend' ? 
        <AddFriendTab />
        :
        <div>
          A
        </div>
      }
    </div>
  );
}

export default AddFriend;