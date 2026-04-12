import Image from 'next/image';
import { Container } from '@/components/ui/Container/Container';
import styles from './About.module.css';

export const About = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <h2 className={styles.title}>About</h2>

          {/* INTRO */}
          <div className={styles.textGroup}>
            <p className={styles.text}>
              I&apos;m a fullstack developer with a design background.
            </p>
            <p className={styles.text}>
              I help small businesses launch modern websites that are fast,
              clear, and built to convert.
            </p>
            <p className={styles.text}>
              You don&apos;t just get a website - you get a tool that works for
              your business.
            </p>
          </div>

          {/* WHAT YOU GET */}
          <div className={styles.block}>
            <h3 className={styles.blockTitle}>What you get</h3>

            <div className={styles.textGroup}>
              <p className={styles.text}>
                Each project is built with a clear focus on performance,
                usability, and structure.
              </p>
              <p className={styles.text}>
                Everything is designed to be fast, mobile-friendly, and easy to
                scale.
              </p>
            </div>

            <ul className={styles.grid}>
              <li className={styles.item}>
                <Image
                  src="/icons/lightning.svg"
                  alt=""
                  width={80}
                  height={80}
                  className={styles.icon}
                />
                <span>Built fast</span>
              </li>

              <li className={styles.item}>
                <Image
                  src="/icons/smartphone.svg"
                  alt=""
                  width={80}
                  height={80}
                  className={styles.icon}
                />
                <span>Mobile-first approach</span>
              </li>

              <li className={styles.item}>
                <Image
                  src="/icons/grid.svg"
                  alt=""
                  width={80}
                  height={80}
                  className={styles.icon}
                />
                <span>Clean, scalable code</span>
              </li>
            </ul>
          </div>

          {/* HOW I WORK */}
          <div className={styles.block}>
            <h3 className={styles.blockTitle}>How I work</h3>

            <div className={styles.textGroup}>
              <p className={styles.text}>
                Every project starts with an idea - yours or one we shape
                together.
              </p>
              <p className={styles.text}>
                Then I turn it into a working product and bring it to launch.
              </p>
            </div>

            <ul className={styles.grid}>
              <li className={styles.item}>
                <Image
                  src="/icons/lightbulb.svg"
                  alt=""
                  width={80}
                  height={80}
                  className={styles.icon}
                />
                <span>Idea</span>
              </li>

              <li className={styles.item}>
                <Image
                  src="/icons/code.svg"
                  alt=""
                  width={80}
                  height={80}
                  className={styles.icon}
                />
                <span>Development</span>
              </li>

              <li className={styles.item}>
                <Image
                  src="/icons/rocket.svg"
                  alt=""
                  width={80}
                  height={80}
                  className={styles.icon}
                />
                <span>Launch</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
