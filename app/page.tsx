import ContactForm from "@/components/contact/ContactForm";
import styles from "./page.module.css";

import Intro from "@/components/intro/Intro";
import Card from "@/components/reveal-cards/Card";
import CardCarousel from "@/components/reveal-cards/CardCarousel";
import StackedCardTestimonials from "@/components/testimonials/StackedCardTestimonials";
import NotificationContextProvider from "@/contexts/notification-context";

export default function Home() {
  return (
    <main>
      <Intro />
      <CardCarousel />
      <StackedCardTestimonials />
      <NotificationContextProvider>
        <ContactForm />
      </NotificationContextProvider>
    </main>
  );
}
