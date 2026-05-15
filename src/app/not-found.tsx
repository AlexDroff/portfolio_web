import Image from "next/image";

import { Button } from "@/components/ui/Button/Button";
import { siteContent } from "@/data/locales";
import styles from "./not-found.module.css";

export default function NotFoundPage() {
  const { common, notFound } = siteContent.ui;

  return (
    <main className={styles.main}>
      <div className={styles.inner}>
        <Image
          src="/logo.svg"
          width={48}
          height={48}
          alt={common.logoAlt}
          className={styles.logo}
        />

        <h1 className={styles.title}>{notFound.title}</h1>

        <p className={styles.text}>{notFound.description}</p>

        <Button as="link" href="/" variant="secondary">
          {`\u2190 ${notFound.backHome}`}
        </Button>
      </div>
    </main>
  );
}
