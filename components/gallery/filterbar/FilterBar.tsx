"use client";

import { FaFilter } from "react-icons/fa";
import styles from "./FilterBar.module.css";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { OUTDOOR_OPTIONS, INDOOR_LINKS } from "@/lib/constants";

type FilterOptions = {
  label: string;
  value: string;
};

type FilterProps = {
  options: FilterOptions[];
};

const FilterBar = ({ options }: FilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const value = searchParams.get("value");

  function handleOpen() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <div tabIndex={0} className={styles.container}>
      <button onClick={handleOpen} className={styles.filterBtn}>
        Show Filters <FaFilter />
      </button>

      <span className={styles.divider} />

      <div
        className={`${styles.checkboxContainer} ${isOpen ? styles.show : ""}`}
      >
        <div className={styles.checkboxes}>
          <h3 className={styles.label}>Outdoor</h3>

          <ul className={styles.options}>
            {OUTDOOR_OPTIONS.map((option, index) => {
              return (
                <li key={index} className={styles.option}>
                  <label className={styles.checkContainer}>
                    <input type="checkbox" />
                    <div className={styles.checkmark}></div>
                  </label>
                  <label>{option.label}</label>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.checkboxes}>
          <h3 className={styles.label}>Indoor (not available)</h3>
          <ul className={styles.options}>
            {INDOOR_LINKS.map((option, index) => {
              return (
                <li key={index} className={styles.option}>
                  <label className={styles.checkContainer}>
                    <input type="checkbox" disabled />
                    <div className={styles.checkmark}></div>
                  </label>
                  <label>{option.text}</label>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.actionBtns}>
          <button className={styles.clearBtn}>Clear Filters</button>
          <button className={styles.applyBtn}>Apply Filter</button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
