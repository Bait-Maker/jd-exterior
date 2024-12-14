"use client";

import { useState } from "react";
import styles from "./FilterBar.module.css";

// TODO: add conditional navbar for smaller screens

const FilterBar = () => {
  const [isActive, setActive] = useState("All");

  function handleClick(text: string) {
    setActive(text);
  }

  return (
    <div className={styles.navContainer}>
      <div className={styles.flexContainer}>
        <div className={styles.gridX}>
          <div className="cell">
            <div className={styles.tabs}>
              {BUTTONS.map((button) => {
                return (
                  <button
                    key={button.text}
                    onClick={() => handleClick(button.text)}
                    className={`link ${
                      isActive === button.text ? "isActive" : undefined
                    }`}
                  >
                    {button.text}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;

const BUTTONS = [
  {
    text: "All",
    dataFilter: "*",
  },
  {
    text: "Deck",
    dataFilter: "deck",
  },
  {
    text: "Garage",
    dataFilter: "garage",
  },
  {
    text: "Gazebo",
    dataFilter: "gazebo",
  },
  {
    text: "Windows",
    dataFilter: "windows",
  },
];
