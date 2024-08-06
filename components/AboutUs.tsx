import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/aboutUs.module.css';
import Link from 'next/link';

const AboutUs: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Quadrant Marketing</title>
        <meta name="description" content="Page with video background" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {isClient && (
          <video autoPlay loop muted playsInline className={styles.backgroundVideo}>
            <source src="/assets/background.mp4" type="video/mp4" />
            comma
          </video>
        )}
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <h1>Precision Tools, Unmatched Service</h1>
          <p>Elevate your inspections with cutting-edge NDT solutions </p>
          <Link href="/Contact" className={styles.contactButton}>
            Contact Us
          </Link>
        </div>
       

      </main>
    </div>
  );
};

export default AboutUs;