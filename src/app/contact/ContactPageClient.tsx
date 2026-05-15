"use client";

import type { SubmitEvent } from "react";
import { useState } from "react";
import Link from "next/link";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const backHomeHref = getLocalizedPath(locale, "/");

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

          <div className={styles.intro}>
            <h1 className={styles.title}>{contact.title}</h1>
            <p className={styles.subtitle}>
              {contact.intro}
            </p>
          </div>

          <div className={styles.formBlock}>
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
                  placeholder={contact.namePlaceholder}
                  value={name}
                  onChange={(event) => setName(event.target.value)}
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
                  placeholder={contact.emailPlaceholder}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
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
                  placeholder={contact.messagePlaceholder}
                  rows={6}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
                {errors.message && (
                  <span className={styles.error}>{errors.message}</span>
                )}
              </label>

              <Button variant="primary" type="submit" fullWidth>
                {contact.submitLabel}
              </Button>
            </form>
          </div>

          <p className={styles.directEmail}>
            {`${contact.links.directEmailPrefix} `}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            {" \u2013 "}
            {contact.links.responseTime}
          </p>

          <p className={styles.formTitle}>{contact.socialTitle}</p>

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

          <Link href={backHomeHref} className={styles.backLink}>
            {`\u2190 ${contact.links.backHome}`}
          </Link>
        </div>
      </Container>
    </Section>
  );
};
