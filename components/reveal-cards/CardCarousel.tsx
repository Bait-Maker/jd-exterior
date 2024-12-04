"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import useMeasure from "react-use-measure";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import styles from "./CardCarousel.module.css";
import { CAROUSEL_ITEMS } from "@/lib/constants";
import Card from "./Card";
import ProjectCard from "../gallery/project-card/ProjectCard";

const CARD_WIDTH = 382; // px
const CARD_HEIGHT = 400; // will need to change
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const CardCarousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffsett] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (CAROUSEL_ITEMS.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }

    setOffsett((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }

    setOffsett((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.wrapper} ref={ref}>
        {/* CARDS */}
        <div className={styles.container}>
          <p className={styles.title}>Featured Projects</p>
          <motion.div
            animate={{ x: offset }}
            transition={{ ease: "easeOut" }}
            className={styles.motionDiv}
          >
            {CAROUSEL_ITEMS.map((item) => {
              return (
                <Card
                  key={item.id}
                  url={item.url}
                  categorys={item.category}
                  title={item.title}
                />
              );
            })}
          </motion.div>
        </div>

        {/* BUTTONS */}
        <>
          <motion.button
            initial={false}
            animate={{ x: CAN_SHIFT_LEFT ? "0%" : "-100%" }}
            className={styles.motionButtonLeft}
            onClick={shiftLeft}
          >
            <FiChevronLeft />
          </motion.button>
          <motion.button
            initial={false}
            animate={{ x: CAN_SHIFT_RIGHT ? "0%" : "100%" }}
            className={styles.motionButtonRight}
            onClick={shiftRight}
          >
            <FiChevronRight />
          </motion.button>
        </>
      </div>
    </section>
  );
};

export default CardCarousel;
