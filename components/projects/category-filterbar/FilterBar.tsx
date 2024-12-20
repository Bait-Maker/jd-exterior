"use client";

import { SetStateAction, useState } from "react";

import styles from "./FilterBar.module.css";
import DropdownNav from "@/components/util/dropdown-nav/DropdownNav";
import ProjectGrid from "../project-grid/ProjectGrid";

// TODO: add conditional navbar for smaller screens

const options = [
  { value: "all", label: "All" },
  { value: "deck", label: "Deck" },
  { value: "garage", label: "Garage" },
  { value: "gazebo", label: "Gazebo" },
  { value: "windows", label: "Windows" },
];

const FilterBar = () => {
  const [value, setValue] = useState<(typeof options)[0] | undefined>(
    options[0]
  );

  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.flexContainer}>
          <div className={styles.gridX}>
            <div className={styles.cell}>
              <div className={styles.mediumNavBar}>
                <DropdownNav
                  options={options}
                  value={value}
                  onChange={(option) => setValue(option)}
                />
              </div>
              <div className={styles.tabs}>
                {options.map((option) => {
                  return (
                    <button
                      key={option.label}
                      onClick={() => setValue(option)}
                      className={`link ${
                        value?.label === option.label ? "isActive" : undefined
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProjectGrid value={value} />
    </>
  );
};

export default FilterBar;
