"use client";

import React, { createContext, useState } from "react";

type ContextProviderProps = {
  children: React.ReactNode;
};

export const NotificationContext = createContext({
  notification: "",
  createNotif: (message: string) => {},
  removeNotif: () => {},
});

export default function NotificationContextProvider({
  children,
}: ContextProviderProps) {
  const [notification, setNotification] = useState("");

  const createNotif = (message: string) => {
    setNotification(message);
  };

  const removeNotif = () => {
    setNotification("");
  };

  const notificationContext = {
    notification,
    createNotif,
    removeNotif,
  };

  return (
    <NotificationContext.Provider value={notificationContext}>
      {children}
    </NotificationContext.Provider>
  );
}
