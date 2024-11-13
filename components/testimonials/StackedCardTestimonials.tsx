"use client";

import { useState } from "react";

import styles from "./StackedCardTestimonials.module.css";
import Cards from "./Cards";
import SelectButtons from "./SelectButtons";
import { TESTIMONIALS } from "@/lib/constants";

const StackedCardTestimonials = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h3 className={styles.h3}>What Our Customers Think</h3>
        <div className={styles.buttonDiv}>
          <Cards selected={selected} setSelected={setSelected} />
          <SelectButtons
            numTracks={TESTIMONIALS.length}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
      </div>
    </section>
  );
};

export default StackedCardTestimonials;
