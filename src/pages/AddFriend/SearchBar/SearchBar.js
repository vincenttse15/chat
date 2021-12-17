import React from "react";
import * as styles from "./searchbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import superagent from "superagent";
import { API_URL } from "../../../environment";

const SearchBar = () => {
  const [email, setEmail] = React.useState('');

  async function sendFriendRequest() {
    const response = await superagent.post(`${API_URL}/sendFriendRequest`)
      .send({email: email});

    if (response.body !== undefined && response.body?.success) {
      
    } else {

    }
  }

  return (
    <div className={styles.container}>
      <button className={styles.searchButton}>
        <FontAwesomeIcon icon={["fas", "search"]} className={styles.icon} />
      </button>
      <input type="text" className={styles.input} placeholder="Search by email" onChange={(e) => setEmail(e.target.value)} />
    </div>
  );
}

export default SearchBar;