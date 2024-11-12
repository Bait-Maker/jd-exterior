import Header from "@/components/header/Header";
import styles from "./page.module.css";
import HeaderContextProvider from "@/contexts/header-context";
import Intro from "@/components/intro/Intro";
import Card from "@/components/reveal-cards/Card";
import CardCarousel from "@/components/reveal-cards/CardCarousel";
import StackedCardTestimonials from "@/components/testimonials/StackedCardTestimonials";

export default function Home() {
  return (
    <main>
      <HeaderContextProvider>
        <Header />
      </HeaderContextProvider>
      <Intro />
      <CardCarousel />
      <StackedCardTestimonials />
      <h1 style={{ color: "White" }}>Testimonials </h1>
      <h1 style={{ color: "White" }}>Get In Touch </h1>
      <h1 style={{ color: "White" }}>Footer </h1>
    </main>
  );
}
