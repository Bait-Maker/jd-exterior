import ContactForm from "@/components/contact/ContactForm";
import styles from "./page.module.css";

import Intro from "@/components/intro/Intro";
import Card from "@/components/reveal-cards/Card";
import CardCarousel from "@/components/reveal-cards/CardCarousel";
import StackedCardTestimonials from "@/components/testimonials/StackedCardTestimonials";

export default function Home() {
  return (
    <main>
      <Intro />
      <CardCarousel />
      <StackedCardTestimonials />
      <ContactForm />
      <h1 style={{ color: "White" }}>Get In Touch </h1>
      <h1 style={{ color: "White" }}>Footer </h1>
    </main>
  );
}
