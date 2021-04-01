import Head from "next/head";
import styles from "../styles/Home.module.css";
import SearchBar from "../components/Search";
import {
  visaExample,
  americanExpressExample,
  masterCardExample,
  discoverCardExample,
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

{
  /* <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */
}
