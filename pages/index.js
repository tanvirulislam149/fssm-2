import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome. <a href="/signin">Sign In</a>
          </h1>
        </main>



        <footer className={styles.footer}>

        </footer>
      </div>
    </>
  )
}
