"use client";

import React, { createContext, useState } from "react";

type ContextProviderProps = {
  children: React.ReactNode;
};

export const HeaderContext = createContext({
  scrolled: false,
  updateScroll: (latest: number) => {},
});

export default function HeaderContextProvider({
  children,
}: ContextProviderProps) {
  const [scrolled, setScrolled] = useState(false);

  function updateScroll(latest: number) {
    setScrolled(latest > 100 ? true : false);
  }

  const headerContext = {
    scrolled,
    updateScroll,
  };

  return (
    <HeaderContext.Provider value={headerContext}>
      {children}
    </HeaderContext.Provider>
  );
}
