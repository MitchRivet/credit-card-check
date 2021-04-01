import React, { useState } from "react";
import { checkCardNaive } from "../utils/creditCardCheck";
import styles from "../styles/Home.module.css";

const SearchBar: React.FC = () => {
  const [cardInput, setCardInput] = useState("");
  const [cardCheckResult, setCardCheckResult] = useState("");

  const handleCardChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCardInput(e.currentTarget.value);
  };

  const handleCheck = () => {
    const result = checkCardNaive(cardInput);
    setCardCheckResult(result);
  };
  return (
    <>
      <div className={styles.row}>
        <input
          className={styles.input}
          onChange={handleCardChange}
          type="text"
          value={cardInput}
        />

        <button className={styles.button} onClick={handleCheck}>
          Check
        </button>
      </div>
      <div className={styles.row}>
        {cardCheckResult && <div>This card is: {cardCheckResult}</div>}
      </div>
    </>
  );
};

export default SearchBar;
