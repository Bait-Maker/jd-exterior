"use client";

import { FaFilter } from "react-icons/fa";
import styles from "./FilterBar.module.css";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { OUTDOOR_OPTIONS, INDOOR_LINKS } from "@/lib/constants";
import { IoIosClose } from "react-icons/io";

const FilterBar = () => {
  // TODO: change filter option when clicked
  // TODO: to show what option have already been selected

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
    if (values.length < 1) {
      alert("Cannot filter selected options");
      return;
    }

    const firstvalue = "value=";

    let stringURL = values.join("&value=");

    stringURL = firstvalue + stringURL;

    replace(`${pathname}?${stringURL}`);
  }

  function handleClear() {
    replace("/gallery");
    setSelectedValues([]);
  }

  function handleSingleClear(value: string) {
    if (selectedURLValues.length === 1) {
      handleClear();
      return;
    }

    handleFilter(selectedURLValues.filter((curr) => curr !== value));
    handleSelect(value);
  }

  // console.log(selectedURLValues);
  // console.log(selectedValues);
  // console.log(pathname);

  return (
    <div tabIndex={0} className={styles.container}>
      <button onClick={handleOpen} className={styles.filterBtn}>
        Filters <FaFilter />
      </button>

      <span className={styles.divider} />

      <div className={styles.chipContainer}>
        {selectedURLValues &&
          selectedURLValues.map((val, index) => {
            return (
              <button
                key={index}
                onClick={() => handleSingleClear(val)}
                className={styles.filterChip}
              >
                <span>{val.charAt(0).toUpperCase() + val.slice(1)}</span>{" "}
                <IoIosClose />
              </button>
            );
          })}
      </div>

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
                      selectedValues.includes(option.value)
                        ? `${styles.selected}`
                        : ""
                    }`}
                    disabled={selectedURLValues.includes(option.value)}
                  >
                    {option.label}
                  </button>
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
                  <button
                    className={`${styles.optionBtn} ${
                      selectedValues.includes(option.text)
                        ? `${styles.selected}`
                        : ""
                    }`}
                    disabled
                  >
                    {option.text}
                  </button>
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
            onClick={() => {
              handleFilter(selectedValues);
              handleOpen();
            }}
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
