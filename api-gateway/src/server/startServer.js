import { ApolloServer, gql } from "apollo-server-express";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";

// First Setup (Confirmed it worked)
/*
import resolvers from "#root/graphql/resolvers";
import typeDefs from "#root/graphql/typeDefs";
*/

// Second Setup (Adding more complex queries)
import resolvers from "#root/graphql2/resolvers";
import typeDefs from "#root/graphql2/typeDefs";

// calling the port somehow

const app = express();

app.use(cookieParser());

app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
  })
);

async function startServer() {
  const apolloServer = new ApolloServer({
    resolvers,
    typeDefs,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, cors: false, path: "/graphql" });

  await mongoose
    .connect(
      "mongodb://root:test123@api-server-db:27017/api-server-db?authSource=admin&readPreference=primary",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    )
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

  console.log("hello");
}
startServer();

app.listen(7000, "0.0.0.0", () => {
  console.info("API gateway listening on 7000");
});
