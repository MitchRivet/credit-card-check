import Head from "next/head";
import styles from "../styles/Home.module.css";
import SearchBar from "../components/Search";
import { cardDefs } from "../utils/creditCardCheck";
import {
  visaExample,
  americanExpressExample,
  masterCardExample,
  discoverCardExample,
  visaElectronExamplePrefixLength4,
} from "../constants";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Credit Card Checker</h1>

        <SearchBar />

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Visa</h3>
            <p>{visaExample}</p>
          </div>
          <div className={styles.card}>
            <h3>Visa Electron</h3>
            <p>{visaElectronExamplePrefixLength4}</p>
            <p className={styles.small}>
              (test prefixes are:
              {cardDefs.VISA_ELECTRON.prefix.map((p) => ` ${p}`)})
            </p>
          </div>
          <div className={styles.card}>
            <h3>American Express</h3>
            <p>{americanExpressExample}</p>
          </div>
          <div className={styles.card}>
            <h3>Master Card</h3>
            <p>{masterCardExample}</p>
          </div>
          <div className={styles.card}>
            <h3>Discover</h3>
            <p>{discoverCardExample}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
