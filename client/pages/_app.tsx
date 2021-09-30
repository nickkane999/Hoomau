//import "materialize-css/dist/css/materialize.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Nav from "../src/components/nav";
import type { AppProps /*, AppContext */ } from "next/app";

function MyApp({ Component, pageProps }, AppProps) {
  return (
    <>
      <Nav />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
