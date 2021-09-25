import { ApolloServer, gql } from "apollo-server-express";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import axios from "axios";
import { makeExecutableSchema } from "@graphql-tools/schema";

// First Setup (Confirmed it worked)
import resolvers from "#root/graphql3/resolvers";
import typeDefs from "#root/graphql3/schema";

// Second Setup (Adding more complex queries)
//import resolvers from "#root/graphql2/resolvers";
//import typeDefs from "#root/graphql2/schema";
// calling the port somehow

const app = express();
//const router = express.Router();

app.use(cookieParser());

console.log("REsults");
console.log(resolvers);
console.log(typeDefs);

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
  axios
    .post(
      "http://localhost:7000/graphql",
      {
        query: `
        createUser(user: $userData) {
          id
          username
          bio
          phonenumber
          profession
          createdDate
        }`,
        variables: {
          userData: {
            username: "test",
          },
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
    */
  res.send("I ran");
});
