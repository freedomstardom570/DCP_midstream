// Mistream Splash Page with Next.js, Google Fonts, and Free Images

import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mistream - Crowdfund with XRPL R</title>
        <meta name="description" content="Crowdfund your projects on XRPL R with Mistream" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>

        
        <h1 className={styles.title}>
          Welcome to <a href="https://mistream.com">Mistream!</a>
        </h1>

        <p className={styles.description}>
          Crowdfund your dreams on the XRPL R platform
        </p>

        <div className={styles.grid}>
          <a href="#features" className={styles.card} style={{ backgroundImage: 'url(/feature-image.jpg)' }}>
            <h2>Explore Projects &rarr;</h2>
            <p>Discover innovative projects and ideas waiting for your support.</p>
          </a>

          <a href="#start" className={styles.card} style={{ backgroundImage: 'url(/start-project-image.jpg)' }}>
            <h2>Start a Project &rarr;</h2>
            <p>Bring your ideas to life with the support of the community.</p>
          </a>

          <a href="#about" className={styles.card} style={{ backgroundImage: 'url(/about-mistream-image.jpg)' }}>
            <h2>About Mistream &rarr;</h2>
            <p>Learn more about how Mistream is changing the crowdfunding landscape.</p>
          </a>

          <a href="#contact" className={styles.card} style={{ backgroundImage: 'url(/contact-image.jpg)' }}>
            <h2>Contact Us &rarr;</h2>
            <p>Have questions? Our team is here to help you every step of the way.</p>
          </a>
        </div>

        <div className={styles.comingSoon}>
          <button className={styles.button}>Coming Soon</button>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            {/* <Image src="/nextjs-logo.svg" alt="Next.js Logo" width={72} height={16} /> */}
          </span>
        </a>
      </footer>
    </div>
  )
}
