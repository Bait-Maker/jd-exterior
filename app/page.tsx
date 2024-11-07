import Header from "@/components/header/Header";
import styles from "./page.module.css";
import HeaderContextProvider from "@/contexts/header-context";

export default function Home() {
  return (
    <main>
      <HeaderContextProvider>
        <Header />
      </HeaderContextProvider>
      <h1 style={{ color: "White" }}>Projects (Card Reveal)</h1>
      <h1 style={{ color: "White" }}>Testimonials </h1>
      <h1 style={{ color: "White" }}>Get In Touch </h1>
      <h1 style={{ color: "White" }}>Footer </h1>
    </main>
  );
}
