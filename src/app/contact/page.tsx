import Link from "next/link";

import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";
import { Button } from "@/components/ui/Button/Button";

export default function ContactPage() {
  return (
    <Section>
      <Container>
        <h1>Contact</h1>
        <p>Let&apos;s build something together.</p>
        <p>
          Email:{" "}
          <a href="mailto:olexandr.alexandroff@gmail.com">
            olexandr.alexandroff@gmail.com
          </a>
        </p>
        <Link href="mailto:olexandr.alexandroff@gmail.com">
          <Button>Send Email</Button>
        </Link>
      </Container>
    </Section>
  );
}
