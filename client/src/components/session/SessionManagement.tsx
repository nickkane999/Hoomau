import React, { createContext, useState, useContext, useEffect } from "react";

const SessionContext = createContext();

export const SessionManagement = ({ children }) => {
  const [sample, setSample] = useState();
  useEffect(() => {
    setSample("Testing1234");
  }, []);
  return <SessionContext.Provider>{children}</SessionContext.Provider>;
};

export const useProfile = () => useContext(SessionContext);

export default SessionManagement;
