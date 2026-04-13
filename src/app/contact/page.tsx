"use client";

import type { SubmitEvent } from "react";
import { useState } from "react";
import Link from "next/link";

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

const TelegramIcon = ({ className }: IconProps) => (
  <span className={`${styles.icon} ${className}`} aria-hidden="true" />
);

const LinkedInIcon = ({ className }: IconProps) => (
  <span className={`${styles.icon} ${className}`} aria-hidden="true" />
);

const GitHubIcon = ({ className }: IconProps) => (
  <span className={`${styles.icon} ${className}`} aria-hidden="true" />
);

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    const nextErrors: FormErrors = {};

    if (!/^[A-Za-z\s]{3,18}$/.test(trimmedName)) {
      nextErrors.name =
        "Name must be 3\u201318 characters and contain only letters.";
    }

    if (!/^[^\s@]+@[^\s@]+.[^\s@]+$/.test(trimmedEmail)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (trimmedMessage.length < 5 || trimmedMessage.length > 500) {
      nextErrors.message = "Message must be at least 5 characters.";
    }

    if (nextErrors.name || nextErrors.email || nextErrors.message) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});

    const subject = encodeURIComponent("New project inquiry");

    const body = encodeURIComponent(
      `Name: ${trimmedName}\n\nEmail: ${trimmedEmail}\n\nMessage:\n${trimmedMessage}`,
    );

    const mailto = `mailto:olexandr.alexandroff@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailto;
  };

  return (
    <Section>
      <Container>
        <div className={styles.wrapper}>
          <Link href="/" className={styles.backLink}>
            {"\u2190 Back to main page"}
          </Link>

          <div className={styles.intro}>
            <h1 className={styles.title}>Let&apos;s work together</h1>
            <p className={styles.subtitle}>
              Have a project in mind? Send me a message and I&apos;ll get back
              to you.
            </p>
          </div>

          <div className={styles.contacts}>
            <a
              className={styles.contactItem}
              href="https://t.me/Oleksandr_Alexandrov"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.iconBox}>
                <TelegramIcon className={styles.telegramIcon} />
              </span>
              <span>Telegram</span>
            </a>

            <a
              className={styles.contactItem}
              href="https://www.linkedin.com/in/oleksandr-aleksandov/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.iconBox}>
                <LinkedInIcon className={styles.linkedinIcon} />
              </span>
              <span>LinkedIn</span>
            </a>

            <a
              className={styles.contactItem}
              href="https://github.com/AlexDroff"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.iconBox}>
                <GitHubIcon className={styles.githubIcon} />
              </span>
              <span>GitHub</span>
            </a>
          </div>

          <div className={styles.formBlock}>
            <h2 className={styles.formTitle}>Send a message</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
              <label className={styles.field}>
                <span className={styles.fieldLabel}>Name</span>
                <input
                  className={`${styles.input} ${
                    errors.name ? styles.inputError : ""
                  }`}
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                {errors.name && <span className={styles.error}>{errors.name}</span>}
              </label>

              <label className={styles.field}>
                <span className={styles.fieldLabel}>Email</span>
                <input
                  className={`${styles.input} ${
                    errors.email ? styles.inputError : ""
                  }`}
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                {errors.email && (
                  <span className={styles.error}>{errors.email}</span>
                )}
              </label>

              <label className={styles.field}>
                <span className={styles.fieldLabel}>Message</span>
                <textarea
                  className={`${styles.textarea} ${
                    errors.message ? styles.inputError : ""
                  }`}
                  placeholder="Write your message"
                  rows={6}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
                {errors.message && (
                  <span className={styles.error}>{errors.message}</span>
                )}
              </label>

              <Button>Send message</Button>
            </form>

            <p className={styles.directEmail}>
              Or email me directly:{" "}
              <a href="mailto:olexandr.alexandroff@gmail.com">
                olexandr.alexandroff@gmail.com
              </a>
            </p>
          </div>

          <p className={styles.trustText}>I usually reply within 24 hours.</p>
        </div>
      </Container>
    </Section>
  );
}
