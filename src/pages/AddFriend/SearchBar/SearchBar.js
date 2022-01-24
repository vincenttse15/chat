import React from "react";
import * as styles from "./searchbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import superagent from "superagent";
import { API_URL } from "../../../environment";
import Cookies from "universal-cookie";
import { useSelector } from "react-redux";

const SearchBar = () => {
  const [email, setEmail] = React.useState('');
  const [searchResult, setSearchResult] = React.useState('');
  const [resultError, setResultError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const user = useSelector(state => state.user);

  async function validate() {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.length === 0) {
      setSearchResult("This field is required.");
      setResultError(true);
    } else if (!email.match(regex)) {
      setSearchResult("Enter a valid email.");
      setResultError(true);
    } else if (email === user.email) {
      setSearchResult("You cannot add yourself.");
      setResultError(true);
    }

    return (email.length === 0 || !email.match(regex) || email === user.email);
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
        setSearchResult(response.body.message);
        setResultError(false);
      } else {
        setSearchResult(response.body.message);
        setResultError(true);
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
        <div className={`${styles.resultMessage} ${resultError ? `${styles.error}` : `${styles.success}`}`}>
          {searchResult}
        </div>
      }
    </>
  );
}

export default SearchBar;