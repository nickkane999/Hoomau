import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Nav from "../src/components/nav";

const Home = () => {
  return (
    <>
      <h1>Our goal</h1>
      <p>This site will let you extract data from different websites</p>
      <h2>How to use</h2>
      <p>
        You can find different scripts that are available to use from the
        "Results" page
      </p>
      <p>
        The scripts you have created or favorited can be found on the "Scripts"
        page
      </p>
      <p>
        Customize information you would like others to see from your "Profile"
        page
      </p>
    </>
  );
};

export default Home;
