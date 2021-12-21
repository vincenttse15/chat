import React from "react";
import * as styles from "./searchbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import superagent from "superagent";
import { API_URL } from "../../../environment";
import Cookies from "universal-cookie";

const SearchBar = () => {
  const [email, setEmail] = React.useState('');
  const [searchResult, setSearchResult] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  async function validate() {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.length === 0) {
      setSearchResult("This field is required.");
    } else if (!email.match(regex)) {
      setSearchResult("Enter a valid email.");
    }

    return (email.length === 0 || !email.match(regex));
  }

  async function sendFriendRequest(e) {
    e.preventDefault();
    const invalid = await validate();

    if (!invalid) {
      setLoading(true);
      const cookies = new Cookies();
      const cookie = cookies.get("session");

      const response = await superagent.post(`${API_URL}/sendFriendRequest`)
        .send({ email: email })
        .send({ cookie: cookie });

      setLoading(false);
      if (response.body !== undefined && response.body?.success) {
        console.log(response.body);
      } else {
        setSearchResult(response.body.message);
      }
    }
  }

  return (
    <>
      <form className={`${styles.container} ${loading ? `${styles.disabledBorder}` : ''}`} onSubmit={sendFriendRequest}>
        <button className={`${styles.searchButton} ${loading ? `${styles.disabledButton}` : ''}`} type="submit" disabled={loading}>
          <FontAwesomeIcon icon={["fas", "search"]} className={styles.icon} />
        </button>
        <input type="text" className={styles.input} placeholder="Search by email" onChange={(e) => setEmail(e.target.value)} />
      </form>
      {searchResult.length > 0 &&
        <div className={styles.error}>
          {searchResult}
        </div>
      }
    </>
  );
}

export default SearchBar;