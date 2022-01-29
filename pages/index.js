import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja blog | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
          recusandae, delectus harum quis fuga iure, aliquam placeat odio
          corrupti voluptas ratione illo temporibus enim voluptates voluptatum
          facere commodi possimus. Voluptates?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          obcaecati quae consectetur animi architecto dolorem ut consequatur,
          unde dolore recusandae iste autem, quia sed beatae voluptatum error
          cupiditate odio incidunt.
        </p>
        <div className={styles.btn}>
          <Link href="/ninjas">See Ninja Listing</Link>
        </div>
      </div>
    </>
  );
}
