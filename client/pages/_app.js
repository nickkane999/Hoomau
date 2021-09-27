//import "materialize-css/dist/css/materialize.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "#root/styles/globals.css";
import Nav from "#root/src/components/nav";
import SessionManagement from "#root/src/components/session/SessionManagement";
import { SessionContext } from "#root/src/components/session/SessionContext";
import { useState, useEffect, useMemo } from "react";

function MyApp({ Component, pageProps }) {
  const [login, setLogin] = useState("hello from context");

  const providerValue = useMemo(() => ({ login, setLogin }), [login, setLogin]);

  return (
    <>
      <SessionContext.Provider value={providerValue}>
        <Nav />
        <div className="container">
          <Component {...pageProps} />
        </div>
      </SessionContext.Provider>
    </>
  );
}

export default MyApp;
