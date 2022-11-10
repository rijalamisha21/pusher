import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Nav from "./Nav"
import Heading from "../components/Heading";
import Navbar from "../components/ListItem/index";
import Container from "../components/Container";
import Button from "../components/Button";
import Pusher from "../assets/Icons/Pusher/pusher";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pusher | Leader in real time technology</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pusher_icon.png" />
      </Head>

      <main className={styles.main}>
        <div className={`container-fluid p-5 d-flex flex-row ${styles.wrapper}`}>
          <Container />
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}