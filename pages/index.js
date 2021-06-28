import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Deck from "../components/Deck";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cards.js</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <header>
          <h1 className={styles["main-title"]}>Card.js</h1>
          <Deck title="Table" path="cards" flipped="3" />
          <Deck title="Hand" path="cards/2" flipped="2" />
        </header>
      </div>
    </div>
  );
}
