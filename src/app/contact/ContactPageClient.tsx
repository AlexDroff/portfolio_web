"use client";

import type { SubmitEvent } from "react";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

import { siteConfig } from "@/config/site";
import type { Locale, LocaleContent } from "@/data/locales";
import { getLocalizedPath } from "@/data/locales";
import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";
import { Button } from "@/components/ui/Button/Button";
import styles from "./Contact.module.css";

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

type IconProps = {
  className: string;
};

type ContactPageClientProps = {
  locale: Locale;
  contact: LocaleContent["contact"];
};

const TelegramIcon = ({ className }: IconProps) => (
  <span className={`${styles.icon} ${className}`} aria-hidden="true" />
);

const LinkedInIcon = ({ className }: IconProps) => (
  <span className={`${styles.icon} ${className}`} aria-hidden="true" />
);

const GitHubIcon = ({ className }: IconProps) => (
  <span className={`${styles.icon} ${className}`} aria-hidden="true" />
);

export const ContactPageClient = ({ locale, contact }: ContactPageClientProps) => {
  const shouldReduceMotion = useReducedMotion();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isFocused, setIsFocused] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [typedPlaceholders, setTypedPlaceholders] = useState({
    name: "",
    email: "",
    message: "",
  });
  const backHomeHref = getLocalizedPath(locale, "/");
  const fullPlaceholders = useMemo(
    () => ({
      name: contact.namePlaceholder,
      email: contact.emailPlaceholder,
      message: contact.messagePlaceholder,
    }),
    [contact.namePlaceholder, contact.emailPlaceholder, contact.messagePlaceholder],
  );

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    let isCancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    timers.push(
      setTimeout(() => {
        setTypedPlaceholders({
          name: "",
          email: "",
          message: "",
        });
      }, 0),
    );

    const typePlaceholder = (
      field: keyof typeof fullPlaceholders,
      delay: number,
      stepMs: number,
    ) => {
      const text = fullPlaceholders[field];
      let index = 0;

      const tick = () => {
        if (isCancelled) {
          return;
        }

        index += 1;
        setTypedPlaceholders((prev) => ({
          ...prev,
          [field]: text.slice(0, index),
        }));

        if (index < text.length) {
          timers.push(setTimeout(tick, stepMs));
        }
      };

      timers.push(setTimeout(tick, delay));
    };

    typePlaceholder("name", 0, 24);
    typePlaceholder("email", 140, 24);
    typePlaceholder("message", 280, 18);

    return () => {
      isCancelled = true;
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [fullPlaceholders, shouldReduceMotion]);

  const getRevealProps = (delay: number) => {
    if (shouldReduceMotion) {
      return {
        initial: false as const,
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0 },
      };
    }

    return {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.65, ease: "easeOut" as const, delay },
    };
  };

  const getPlaceholder = (
    field: keyof typeof fullPlaceholders,
    currentValue: string,
  ) => {
    if (shouldReduceMotion || isFocused[field] || currentValue.length > 0) {
      return fullPlaceholders[field];
    }

    return typedPlaceholders[field];
  };

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    const nextErrors: FormErrors = {};

    if (!/^[A-Za-z\s]{3,18}$/.test(trimmedName)) {
      nextErrors.name = contact.validation.nameInvalid;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      nextErrors.email = contact.validation.emailInvalid;
    }

    if (trimmedMessage.length < 5 || trimmedMessage.length > 500) {
      nextErrors.message = contact.validation.messageInvalid;
    }

    if (nextErrors.name || nextErrors.email || nextErrors.message) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});

    const subject = encodeURIComponent(contact.mailto.subject);

    const body = encodeURIComponent(
      `${contact.mailto.nameLabel}: ${trimmedName}\n\n${contact.mailto.emailLabel}: ${trimmedEmail}\n\n${contact.mailto.messageLabel}:\n${trimmedMessage}`,
    );

    const mailto = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;

    window.location.href = mailto;
  };

  return (
    <Section>
      <Container>
        <div className={styles.wrapper}>
          <Link href={backHomeHref} className={styles.backLink}>
            {`\u2190 ${contact.links.backHome}`}
          </Link>

          <motion.div className={styles.intro} {...getRevealProps(0)}>
            <h1 className={styles.title}>{contact.title}</h1>
            <p className={styles.subtitle}>
              {contact.intro}
            </p>
          </motion.div>

          <motion.div className={styles.formBlock} {...getRevealProps(0.24)}>
            <h2 className={styles.formTitle}>{contact.formTitle}</h2>
            <p className={styles.subtitle}>{contact.helperText}</p>
            <form className={styles.form} onSubmit={handleSubmit}>
              <label className={styles.field}>
                <span className={styles.fieldLabel}>{contact.nameLabel}</span>
                <input
                  className={`${styles.input} ${
                    errors.name ? styles.inputError : ""
                  }`}
                  type="text"
                  placeholder={getPlaceholder("name", name)}
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  onFocus={() => setIsFocused((prev) => ({ ...prev, name: true }))}
                  onBlur={() => setIsFocused((prev) => ({ ...prev, name: false }))}
                />
                {errors.name && <span className={styles.error}>{errors.name}</span>}
              </label>

              <label className={styles.field}>
                <span className={styles.fieldLabel}>{contact.emailLabel}</span>
                <input
                  className={`${styles.input} ${
                    errors.email ? styles.inputError : ""
                  }`}
                  type="email"
                  placeholder={getPlaceholder("email", email)}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  onFocus={() => setIsFocused((prev) => ({ ...prev, email: true }))}
                  onBlur={() => setIsFocused((prev) => ({ ...prev, email: false }))}
                />
                {errors.email && (
                  <span className={styles.error}>{errors.email}</span>
                )}
              </label>

              <label className={styles.field}>
                <span className={styles.fieldLabel}>{contact.messageLabel}</span>
                <textarea
                  className={`${styles.textarea} ${
                    errors.message ? styles.inputError : ""
                  }`}
                  placeholder={getPlaceholder("message", message)}
                  rows={6}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  onFocus={() => setIsFocused((prev) => ({ ...prev, message: true }))}
                  onBlur={() => setIsFocused((prev) => ({ ...prev, message: false }))}
                />
                {errors.message && (
                  <span className={styles.error}>{errors.message}</span>
                )}
              </label>

              <Button variant="primary" type="submit" fullWidth>
                {contact.submitLabel}
              </Button>
            </form>
          </motion.div>

          <motion.div className={styles.socialBlock} {...getRevealProps(0.4)}>
            <p className={styles.directEmail}>
              {`${contact.links.directEmailPrefix} `}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              {" \u2013 "}
              {contact.links.responseTime}
            </p>

            <p className={`${styles.formTitle} ${styles.socialTitle}`}>{contact.socialTitle}</p>

            <div className={styles.contacts}>
              <a
                className={styles.contactItem}
                href={siteConfig.telegramUrl}
                aria-label={contact.links.telegram}
                title={contact.links.telegram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.iconBox}>
                  <TelegramIcon className={styles.telegramIcon} />
                </span>
              </a>

              <a
                className={styles.contactItem}
                href={siteConfig.linkedinUrl}
                aria-label={contact.links.linkedin}
                title={contact.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.iconBox}>
                  <LinkedInIcon className={styles.linkedinIcon} />
                </span>
              </a>

              <a
                className={styles.contactItem}
                href={siteConfig.githubUrl}
                aria-label={contact.links.github}
                title={contact.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.iconBox}>
                  <GitHubIcon className={styles.githubIcon} />
                </span>
              </a>
            </div>

            <Link href={backHomeHref} className={`${styles.backLink} ${styles.socialBackLink}`}>
              {`\u2190 ${contact.links.backHome}`}
            </Link>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
