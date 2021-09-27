//import "materialize-css/dist/css/materialize.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Nav from "../src/components/nav";
import client from "./profile/testclient";
import { ApolloProvider } from "@apollo/react-hooks";

// ApolloProvider currently doesnt do anything, but could in the future
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Nav />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}

export default MyApp;
