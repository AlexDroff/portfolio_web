import Image from "next/image";

import { Button } from "@/components/ui/Button/Button";
import styles from "./not-found.module.css";

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
          The page you are looking for doesn&apos;t exist or was moved.
        </p>

        <Button as="link" href="/" variant="secondary">
          {"\u2190 Back to home"}
        </Button>
      </div>
    </main>
  );
}
