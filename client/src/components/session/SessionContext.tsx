import { useState, createContext, useContext, useMemo } from "react";

const SessionContext = createContext(null);

export function useSessionData() {
  return useContext(SessionContext);
}

export function SessionProvider({ children }) {
  const [login, setLogin] = useState();
  const [openLoginModal, setOpenLoginModal] = useState(false);

  const loginInfo = useMemo(() => ({ login, setLogin }), [login, setLogin]);
  const loginModal = useMemo(
    () => ({ openLoginModal, setOpenLoginModal }),
    [openLoginModal, setOpenLoginModal]
  );

  return (
    <>
      <SessionContext.Provider value={{ loginData: loginInfo, loginModal }}>
        {children}
      </SessionContext.Provider>
    </>
  );
}
