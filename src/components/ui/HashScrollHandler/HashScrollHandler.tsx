"use client";

import { useEffect } from "react";

import { scrollToHashTarget } from "@/utils/scrollToHashTarget";

type HashScrollHandlerProps = {
  hash: string;
};

export const HashScrollHandler = ({ hash }: HashScrollHandlerProps) => {
  useEffect(() => {
    const id = hash.startsWith("#") ? hash.slice(1) : hash;
    const targetHash = `#${id}`;

    const handleHashScroll = () => {
      if (window.location.hash !== targetHash) {
        return;
      }

      scrollToHashTarget(id);
    };

    handleHashScroll();
    const timeoutId = window.setTimeout(handleHashScroll, 80);
    window.addEventListener("hashchange", handleHashScroll);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, [hash]);

  return null;
};
