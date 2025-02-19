"use client";

import { FaFilter } from "react-icons/fa";
import styles from "./FilterBar.module.css";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { OUTDOOR_OPTIONS, INDOOR_LINKS } from "@/lib/constants";

const FilterBar = () => {
  // TODO: change input checkboxes to buttons

  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const selectedURLValues = searchParams.getAll("value");

  function handleOpen() {
    setIsOpen((prevState) => !prevState);
  }

  function handleSelect(value: string) {
    if (!selectedValues.includes(value)) {
      setSelectedValues([...selectedValues, value]);
    } else {
      setSelectedValues(selectedValues.filter((curr) => curr !== value));
    }
  }

  function handleFilter(values: string[]) {
    const firstvalue = "value=";

    let stringURL = values.join("&value=");

    stringURL = firstvalue + stringURL;

    replace(`${pathname}?${stringURL}`);
  }

  function handleClear() {
    replace("/gallery");
    setSelectedValues([]);
  }

  console.log(selectedURLValues);
  console.log(selectedValues);
  console.log(pathname);

  return (
    <div tabIndex={0} className={styles.container}>
      <button onClick={handleOpen} className={styles.filterBtn}>
        Filters <FaFilter />
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
                  <button
                    onClick={() => handleSelect(option.value)}
                    className={`${styles.optionBtn} ${
                      selectedURLValues.includes(option.value)
                        ? `${styles.selected}`
                        : ""
                    }`}
                    disabled={selectedURLValues.includes(option.value)}
                  >
                    {option.label}
                  </button>
                  {/* <label className={styles.checkContainer}>
                    {selectedURLValues.includes(option.value) ? (
                      <input
                        type="checkbox"
                        onChange={() => handleSelect(option.value)}
                        checked
                      />
                    ) : (
                      <input
                        type="checkbox"
                        onChange={() => handleSelect(option.value)}
                      />
                    )}

                    <div className={styles.checkmark}></div>
                  </label>
                  <label>{option.label}</label> */}
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
          <button
            className={styles.clearBtn}
            onClick={() => {
              handleClear();
              handleOpen();
            }}
          >
            Clear
          </button>
          <button
            onClick={() => handleFilter(selectedValues)}
            className={styles.applyBtn}
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
