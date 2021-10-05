//import "materialize-css/dist/css/materialize.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "#root/styles/globals.css";
import Nav from "#root/src/components/nav/Nav";
import Modals from "#root/src/components/modals/Modals";
import client from "#root/pages/api/graphql/client";
import { ApolloProvider } from "@apollo/react-hooks";
import SessionManagement from "#root/src/components/session/SessionManagement";
import { SessionProvider } from "#root/src/components/session/SessionContext";

function MyApp({ Component, pageProps }, AppProps) {
  return (
    <ApolloProvider client={client}>
      <SessionProvider>
        <Nav />
        <Modals />
        <div className="container">
          <Component {...pageProps} />
        </div>
      </SessionProvider>
    </ApolloProvider>
  );
}

export default MyApp;
