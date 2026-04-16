'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container/Container';
import styles from './About.module.css';

export const About = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('[data-about-popover-item="true"]')) {
        setActiveItem(null);
      }
    };

    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const handleItemClick = (id: string) => {
    if (activeItem === id) {
      setActiveItem(null);
    } else {
      setActiveItem(id);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLLIElement>, id: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleItemClick(id);
    }
  };

  const handleItemMouseLeave = (id: string) => {
    if (activeItem === id) {
      setActiveItem(null);
    }
  };

  const handleItemBlur = (event: React.FocusEvent<HTMLLIElement>, id: string) => {
    const nextFocused = event.relatedTarget as Node | null;
    if (activeItem === id && !event.currentTarget.contains(nextFocused)) {
      setActiveItem(null);
    }
  };

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
              <li
                className={`${styles.item} ${styles.iconItem} ${activeItem === 'fast' ? styles.iconItemActive : ''}`}
                onClick={() => handleItemClick('fast')}
                onKeyDown={event => handleKeyDown(event, 'fast')}
                onMouseLeave={() => handleItemMouseLeave('fast')}
                onBlur={event => handleItemBlur(event, 'fast')}
                role="button"
                tabIndex={0}
                aria-expanded={activeItem === 'fast'}
                data-about-popover-item="true"
              >
                <Image
                  src="/icons/lightning.svg"
                  alt=""
                  width={80}
                  height={80}
                  className={styles.icon}
                />
                <span>Built fast</span>
                <div
                  className={`${styles.popover} ${activeItem === 'fast' ? styles.popoverActive : ''}`}
                  aria-hidden={activeItem !== 'fast'}
                >
                  Fast delivery without unnecessary complexity. Focus on clarity
                  and speed.
                </div>
              </li>

              <li
                className={`${styles.item} ${styles.iconItem} ${activeItem === 'mobile' ? styles.iconItemActive : ''}`}
                onClick={() => handleItemClick('mobile')}
                onKeyDown={event => handleKeyDown(event, 'mobile')}
                onMouseLeave={() => handleItemMouseLeave('mobile')}
                onBlur={event => handleItemBlur(event, 'mobile')}
                role="button"
                tabIndex={0}
                aria-expanded={activeItem === 'mobile'}
                data-about-popover-item="true"
              >
                <Image
                  src="/icons/smartphone.svg"
                  alt=""
                  width={80}
                  height={80}
                  className={styles.icon}
                />
                <span>Mobile-first approach</span>
                <div
                  className={`${styles.popover} ${activeItem === 'mobile' ? styles.popoverActive : ''}`}
                  aria-hidden={activeItem !== 'mobile'}
                >
                  Most users visit from mobile, so everything is designed
                  mobile-first.
                </div>
              </li>

              <li
                className={`${styles.item} ${styles.iconItem} ${activeItem === 'code' ? styles.iconItemActive : ''}`}
                onClick={() => handleItemClick('code')}
                onKeyDown={event => handleKeyDown(event, 'code')}
                onMouseLeave={() => handleItemMouseLeave('code')}
                onBlur={event => handleItemBlur(event, 'code')}
                role="button"
                tabIndex={0}
                aria-expanded={activeItem === 'code'}
                data-about-popover-item="true"
              >
                <Image
                  src="/icons/grid.svg"
                  alt=""
                  width={80}
                  height={80}
                  className={styles.icon}
                />
                <span>Clean, scalable code</span>
                <div
                  className={`${styles.popover} ${activeItem === 'code' ? styles.popoverActive : ''}`}
                  aria-hidden={activeItem !== 'code'}
                >
                  Structured code that is easy to maintain and scale.
                </div>
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
              <li
                className={`${styles.item} ${styles.iconItem} ${activeItem === 'idea' ? styles.iconItemActive : ''}`}
                onClick={() => handleItemClick('idea')}
                onKeyDown={event => handleKeyDown(event, 'idea')}
                onMouseLeave={() => handleItemMouseLeave('idea')}
                onBlur={event => handleItemBlur(event, 'idea')}
                role="button"
                tabIndex={0}
                aria-expanded={activeItem === 'idea'}
                data-about-popover-item="true"
              >
                <Image
                  src="/icons/lightbulb.svg"
                  alt=""
                  width={80}
                  height={80}
                  className={styles.icon}
                />
                <span>Idea</span>
                <div
                  className={`${styles.popover} ${activeItem === 'idea' ? styles.popoverActive : ''}`}
                  aria-hidden={activeItem !== 'idea'}
                >
                  We define your goals and shape the idea together.
                </div>
              </li>

              <li
                className={`${styles.item} ${styles.iconItem} ${activeItem === 'development' ? styles.iconItemActive : ''}`}
                onClick={() => handleItemClick('development')}
                onKeyDown={event => handleKeyDown(event, 'development')}
                onMouseLeave={() => handleItemMouseLeave('development')}
                onBlur={event => handleItemBlur(event, 'development')}
                role="button"
                tabIndex={0}
                aria-expanded={activeItem === 'development'}
                data-about-popover-item="true"
              >
                <Image
                  src="/icons/code.svg"
                  alt=""
                  width={80}
                  height={80}
                  className={styles.icon}
                />
                <span>Development</span>
                <div
                  className={`${styles.popover} ${activeItem === 'development' ? styles.popoverActive : ''}`}
                  aria-hidden={activeItem !== 'development'}
                >
                  I turn the idea into a working product with real
                  functionality.
                </div>
              </li>

              <li
                className={`${styles.item} ${styles.iconItem} ${activeItem === 'launch' ? styles.iconItemActive : ''}`}
                onClick={() => handleItemClick('launch')}
                onKeyDown={event => handleKeyDown(event, 'launch')}
                onMouseLeave={() => handleItemMouseLeave('launch')}
                onBlur={event => handleItemBlur(event, 'launch')}
                role="button"
                tabIndex={0}
                aria-expanded={activeItem === 'launch'}
                data-about-popover-item="true"
              >
                <Image
                  src="/icons/rocket.svg"
                  alt=""
                  width={80}
                  height={80}
                  className={styles.icon}
                />
                <span>Launch</span>
                <div
                  className={`${styles.popover} ${activeItem === 'launch' ? styles.popoverActive : ''}`}
                  aria-hidden={activeItem !== 'launch'}
                >
                  You receive a ready-to-use product for real business use.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
