import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Nav from "../src/components/nav";
import { Parser } from "html-to-react";
import json_data from "../src/page-text/home.json";

interface Content {
  title: String;
  html_content: String;
}

const Home = () => {
  const sections: Content[] = json_data.sections;
  return (
    <>
      {sections.map((section) => {
        return (
          <div key={section.title} className="section">
            {Parser().parse(section.title)}
            {Parser().parse(section.html_content)}
          </div>
        );
      })}
    </>
  );
};

export default Home;
