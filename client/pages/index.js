import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/">
        <a className={styles.btn}> Home</a>
      </Link>
      <Link href="/results">
        <a className={styles.btn}> Results</a>
      </Link>
      <Link href="/scripts">
        <a className={styles.btn}> Scripts</a>
      </Link>
      <Link href="/profile">
        <a className={styles.btn}> Profile</a>
      </Link>
    </>
  );
}
