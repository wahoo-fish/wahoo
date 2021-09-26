import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wahoo Fish</title>
        <meta name="description" content="I am Wahoo Fish." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          I am
          <span style={{ color: "red" }}> W</span>
          <span style={{ color: "orange" }}>a</span>
          <span style={{ color: "gold" }}>h</span>
          <span style={{ color: "green" }}>o</span>
          <span style={{ color: "blue" }}>o</span>
          <span style={{ color: "indigo" }}> F</span>
          <span style={{ color: "violet" }}>i</span>
          <span style={{ color: "red" }}>s</span>
          <span style={{ color: "orange" }}>h</span>
          <span style={{ color: "green" }}>.</span>
        </h1>
        <Image
          src="/wahoo.png"
          alt="wahoo fish"
          width={400}
          height={400}
          className={styles.wahoo}
        />
      </main>
    </div>
  );
}
