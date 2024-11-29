import ContactForm from "@/components/contact/ContactForm";
import Intro from "@/components/intro/Intro";
import CardCarousel from "@/components/reveal-cards/CardCarousel";
import StackedCardTestimonials from "@/components/testimonials/StackedCardTestimonials";
import NotificationContextProvider from "@/contexts/notification-context";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <CardCarousel />
      <StackedCardTestimonials />
      <NotificationContextProvider>
        <ContactForm />
      </NotificationContextProvider>
    </main>
  );
}
