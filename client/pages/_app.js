//import "materialize-css/dist/css/materialize.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "#root/styles/globals.css";
import Nav from "#root/src/components/nav/Nav";
import SessionManagement from "#root/src/components/session/SessionManagement";
import { SessionProvider } from "#root/src/components/session/SessionContext";
import { useState, useEffect, useMemo, createContext } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SessionProvider>
        <Nav />
        <div className="container">
          <Component {...pageProps} />
        </div>
      </SessionProvider>
    </>
  );
}

export default MyApp;
