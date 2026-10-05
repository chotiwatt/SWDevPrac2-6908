"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Banner.module.css";

const coverImages = ["/img/cover.jpg", "/img/cover2.jpg", "/img/cover3.jpg", "/img/cover4.jpg"];

export default function Banner() {
  const [imageIndex, setImageIndex] = useState(0);
  const router = useRouter();

  function showNextImage() {
    setImageIndex((currentIndex) => (currentIndex + 1) % coverImages.length);
  }

  return (
    <header className={styles.banner}>
      <img
        className={styles.cover}
        src={coverImages[imageIndex]}
        alt="Venue cover"
        onClick={showNextImage}
      />
      <div className={styles.text}>
        <p className={styles.smallTitle}>VENUE EXPLORER</p>
        <h1>Find a place for your special day</h1>
        <p className={styles.description}>Choose a venue and give it a rating that you like.</p>
      </div>
      <button className={styles.selectButton} onClick={() => router.push("/venue")}>
        Select Venue
      </button>
    </header>
  );
}
