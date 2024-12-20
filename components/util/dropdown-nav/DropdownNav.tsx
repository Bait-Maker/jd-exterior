"use client";

import { FiChevronDown, FiX } from "react-icons/fi";
import styles from "./DropdownNav.module.css";
import { useEffect, useState } from "react";

type DropdownOptions = {
  label: string;
  value: string;
};

type DropdownProps = {
  options: DropdownOptions[];
  value?: DropdownOptions;
  onChange: (value: DropdownOptions | undefined) => void;
  children?: React.ReactNode;
};

const DropdownNav = ({ value, onChange, options }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  function handleOpen() {
    setIsOpen((prevState) => !prevState);
  }

  function clearOptions() {
    onChange(options[0]);
  }

  function selectOption(option: DropdownOptions) {
    if (option !== value) {
      onChange(option);
    }
  }

  function isOptionSelected(option: DropdownOptions) {
    return option === value;
  }

  useEffect(() => {
    if (isOpen) {
      setHighlightedIndex(0);
    }
  }, [isOpen]);

  return (
    <div
      onBlur={() => setIsOpen(false)}
      tabIndex={0}
      className={styles.container}
      onClick={handleOpen}
    >
      <span className={styles.value}>{value?.label}</span>
      <button
        className={styles.clearBtn}
        onClick={(event) => {
          event.stopPropagation();
          clearOptions();
        }}
      >
        <FiX />
      </button>

      <div className={styles.divider}></div>

      <span className={`${styles.caret} ${isOpen ? styles.openCaret : ""}`}>
        <FiChevronDown />
      </span>

      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {options.map((option, index) => {
          return (
            <li
              key={option.value}
              onClick={(event) => {
                event.stopPropagation();
                selectOption(option);
                setIsOpen(false);
              }}
              onMouseEnter={() => setHighlightedIndex(index)}
              className={`${styles.option} ${
                isOptionSelected(option) ? styles.selected : ""
              } ${index === highlightedIndex ? styles.highlighted : ""}`}
            >
              {option.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DropdownNav;
