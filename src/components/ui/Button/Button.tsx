import type { MouseEventHandler, ReactNode } from "react";
import Link from "next/link";
import styles from "./Button.module.css";

type ButtonBaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
};

type ButtonElementProps = ButtonBaseProps & {
  as?: "button";
  type?: "button" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  href?: never;
  target?: never;
  rel?: never;
};

type ButtonLinkProps = ButtonBaseProps & {
  as: "link";
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  type?: never;
  target?: string;
  rel?: string;
};

type ButtonProps = ButtonElementProps | ButtonLinkProps;

export const Button = ({
  children,
  variant = "primary",
  as = "button",
  href,
  type = "button",
  onClick,
  fullWidth = false,
  target,
  rel,
}: ButtonProps) => {
  const buttonClassName = [
    styles.button,
    styles[variant],
    fullWidth ? styles.fullWidth : "",
  ]
    .filter(Boolean)
    .join(" ");

  if (as === "link") {
    return (
      <Link
        href={href}
        className={buttonClassName}
        onClick={onClick}
        target={target}
        rel={rel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
};
