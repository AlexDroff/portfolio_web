'use client';

import {
  useEffect,
  useState,
  type FocusEvent,
} from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container/Container';
import { homeContent } from '@/data/home';
import { siteContent } from '@/data/locales';
import styles from './About.module.css';
import myPhoto from '../../../../public/my_photo.webp';

export const About = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const { about } = homeContent;
  const { common } = siteContent.ui;
  const [whatYouGetBlock, howIWorkBlock] = about.blocks;

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

  const handleItemMouseLeave = (id: string) => {
    if (activeItem === id) {
      setActiveItem(null);
    }
  };

  const handleItemBlur = (event: FocusEvent<HTMLLIElement>, id: string) => {
    const nextFocused = event.relatedTarget as Node | null;
    if (activeItem === id && !event.currentTarget.contains(nextFocused)) {
      setActiveItem(null);
    }
  };

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <h2 className={styles.title}>{about.title}</h2>

          <div className={styles.introRow}>
            <div className={styles.textGroup}>
              {about.description.map((paragraph) => (
                <p key={paragraph} className={styles.text}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className={styles.profileCard} aria-label={common.profilePhoto}>
              <Image
                src={myPhoto}
                alt={common.profilePhoto}
                width={myPhoto.width}
                height={myPhoto.height}
                className={styles.profileImage}
                priority={false}
              />
            </div>
          </div>

          <div className={styles.block}>
            <h3 className={styles.blockTitle}>{whatYouGetBlock.title}</h3>

            <div className={styles.textGroup}>
              {whatYouGetBlock.description.map((paragraph) => (
                <p key={paragraph} className={styles.text}>
                  {paragraph}
                </p>
              ))}
            </div>

            <ul className={styles.grid}>
              {whatYouGetBlock.items.map((item) => (
                (() => {
                  const isExpanded = activeItem === item.id;
                  return (
                    <li
                      key={item.id}
                      className={`${styles.item} ${styles.iconItem} ${isExpanded ? styles.iconItemActive : ''}`}
                      onMouseLeave={() => handleItemMouseLeave(item.id)}
                      onBlur={(event) => handleItemBlur(event, item.id)}
                      data-about-popover-item="true"
                    >
                      {isExpanded ? (
                        <button
                          type="button"
                          className={styles.itemButton}
                          onClick={() => handleItemClick(item.id)}
                          aria-expanded="true"
                          aria-controls={`about-popover-${item.id}`}
                          aria-describedby={`about-popover-${item.id}`}
                        >
                          <Image
                            src={item.iconSrc}
                            alt={item.iconAlt}
                            width={80}
                            height={80}
                            className={styles.icon}
                          />
                          <span>{item.title}</span>
                        </button>
                      ) : (
                        <button
                          type="button"
                          className={styles.itemButton}
                          onClick={() => handleItemClick(item.id)}
                          aria-expanded="false"
                          aria-controls={`about-popover-${item.id}`}
                        >
                          <Image
                            src={item.iconSrc}
                            alt={item.iconAlt}
                            width={80}
                            height={80}
                            className={styles.icon}
                          />
                          <span>{item.title}</span>
                        </button>
                      )}
                      <div
                        id={`about-popover-${item.id}`}
                        className={`${styles.popover} ${isExpanded ? styles.popoverActive : ''}`}
                      >
                        {item.description}
                      </div>
                    </li>
                  );
                })()
              ))}
            </ul>
          </div>

          <div className={styles.block}>
            <h3 className={styles.blockTitle}>{howIWorkBlock.title}</h3>

            <div className={styles.textGroup}>
              {howIWorkBlock.description.map((paragraph) => (
                <p key={paragraph} className={styles.text}>
                  {paragraph}
                </p>
              ))}
            </div>

            <ul className={styles.grid}>
              {howIWorkBlock.items.map((item) => (
                (() => {
                  const isExpanded = activeItem === item.id;
                  return (
                    <li
                      key={item.id}
                      className={`${styles.item} ${styles.iconItem} ${isExpanded ? styles.iconItemActive : ''}`}
                      onMouseLeave={() => handleItemMouseLeave(item.id)}
                      onBlur={(event) => handleItemBlur(event, item.id)}
                      data-about-popover-item="true"
                    >
                      {isExpanded ? (
                        <button
                          type="button"
                          className={styles.itemButton}
                          onClick={() => handleItemClick(item.id)}
                          aria-expanded="true"
                          aria-controls={`about-popover-${item.id}`}
                          aria-describedby={`about-popover-${item.id}`}
                        >
                          <Image
                            src={item.iconSrc}
                            alt={item.iconAlt}
                            width={80}
                            height={80}
                            className={styles.icon}
                          />
                          <span>{item.title}</span>
                        </button>
                      ) : (
                        <button
                          type="button"
                          className={styles.itemButton}
                          onClick={() => handleItemClick(item.id)}
                          aria-expanded="false"
                          aria-controls={`about-popover-${item.id}`}
                        >
                          <Image
                            src={item.iconSrc}
                            alt={item.iconAlt}
                            width={80}
                            height={80}
                            className={styles.icon}
                          />
                          <span>{item.title}</span>
                        </button>
                      )}
                      <div
                        id={`about-popover-${item.id}`}
                        className={`${styles.popover} ${isExpanded ? styles.popoverActive : ''}`}
                      >
                        {item.description}
                      </div>
                    </li>
                  );
                })()
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
