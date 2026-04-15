import type { MouseEventHandler, ReactNode } from "react";
import Link from "next/link";
import type { LinkProps } from "next/link";
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
  href: LinkProps["href"];
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  type?: never;
  target?: string;
  rel?: string;
};

type ButtonProps = ButtonElementProps | ButtonLinkProps;

export const Button = (props: ButtonProps) => {
  const { children, variant = "primary", fullWidth = false } = props;

  const buttonClassName = [
    styles.button,
    styles[variant],
    fullWidth ? styles.fullWidth : "",
  ]
    .filter(Boolean)
    .join(" ");

  if (props.as === "link") {
    const { href, onClick, target, rel } = props;

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

  const { type = "button", onClick } = props;

  return (
    <button type={type} className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
};
