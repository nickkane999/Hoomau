//import "materialize-css/dist/css/materialize.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Nav from "../src/components/nav";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
