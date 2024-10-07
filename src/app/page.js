"use client";
import Image from "next/image";
import styles from "./page.module.css";
import State from "./State";

export default function Home() {
  const msg = () => {
    alert("i am shawon");
  };
  return (
    <div className={styles.page}>
      <main>
        <h1>i am shawon</h1>
        <button onClick={msg}>send</button>
        <div>
          <State />
        </div>
      </main>
    </div>
  );
}
