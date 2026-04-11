import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <h2 className={styles.title}>About</h2>

          <p className={styles.text}>
            I&apos;m a fullstack developer with a background in design.
          </p>

          <p className={styles.text}>
            I help small businesses get clean, modern websites that are fast,
            simple, and easy to use.
          </p>

          <ul className={styles.list}>
            <li className={styles.item}>
              <Image
                src="/icons/lightning.svg"
                alt="Fast"
                width={67}
                height={67}
                className={styles.icon}
              />
              <span>Fast</span>
            </li>
            <li className={styles.item}>
              <Image
                src="/icons/smartphone.svg"
                alt="Mobile"
                width={67}
                height={67}
                className={styles.icon}
              />
              <span>Mobile</span>
            </li>
            <li className={styles.item}>
              <Image
                src="/icons/grid.svg"
                alt="Clean structure"
                width={67}
                height={67}
                className={styles.icon}
              />
              <span>Clean structure</span>
            </li>
          </ul>

          <div className={styles.processBlock}>
            <div className={styles.processGrid}>
              <div className={styles.item}>
                <Image
                  src="/icons/lightbulb.svg"
                  alt="Idea"
                  width={67}
                  height={67}
                  className={styles.icon}
                />
                <span>Idea</span>
              </div>
              <div className={styles.item}>
                <Image
                  src="/icons/code.svg"
                  alt="Development"
                  width={67}
                  height={67}
                  className={styles.icon}
                />
                <span>Development</span>
              </div>
              <div className={styles.item}>
                <Image
                  src="/icons/rocket.svg"
                  alt="Launch"
                  width={67}
                  height={67}
                  className={styles.icon}
                />
                <span>Launch</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
