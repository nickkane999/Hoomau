import { gql } from "apollo-server-express";

const typeDefs = gql`
  """
  Main queries for App
  """
  type Query {
    getAllPosts: [Post]
  }

  """
  Data types for App
  """
  type Post {
    id: ID
    title: String
    description: String
  }
`;
module.exports = typeDefs;
