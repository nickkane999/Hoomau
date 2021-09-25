import { ApolloServer, gql } from "apollo-server-express";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import axios from "axios";
import { makeExecutableSchema } from "@graphql-tools/schema";

// Simpler setup for graphql queries
import resolvers from "#root/graphql/resolvers";
import typeDefs from "#root/graphql/schema";

const app = express();
//const router = express.Router();

app.use(cookieParser());

//console.log("REsults");
//console.log(resolvers);
//console.log(typeDefs);

app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
  })
);
const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});
async function startServer() {
  const apolloServer = new ApolloServer({
    schema,
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

app.get("/", (req, res) => {
  /*
   */
  res.send("I ran");
});
