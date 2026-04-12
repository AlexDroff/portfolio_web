import Link from 'next/link';
import Image from 'next/image';
import styles from './not-found.module.css';

export default function NotFoundPage() {
  return (
    <main className={styles.main}>
      <div className={styles.inner}>
        <Image
          src="/logo.svg"
          width={48}
          height={48}
          alt="OA Studio logo"
          className={styles.logo}
        />

        <h1 className={styles.title}>Page not found</h1>

        <p className={styles.text}>
          The page you are looking for doesn’t exist or was moved.
        </p>

        <Link href="/" className={styles.button}>
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
