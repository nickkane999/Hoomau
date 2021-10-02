import { useState, createContext, useContext, useMemo } from "react";

const SessionContext = createContext(null);

export function useLogin() {
  return useContext(SessionContext);
}

export function SessionProvider({ children }) {
  const [login, setLogin] = useState();
  const providerValue = useMemo(() => ({ login, setLogin }), [login, setLogin]);

  return (
    <>
      <SessionContext.Provider value={providerValue}>
        {children}
      </SessionContext.Provider>
    </>
  );
}
