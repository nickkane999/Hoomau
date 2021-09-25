import { gql } from "apollo-server-express";

const typeDefs = gql`
  """
  Main queries for App
  """
  type Query {
    getAllUsers: [User]
    getUser(id: ID): User
  }

  """
  Main mutations for App
  """
  type Mutation {
    createUser(user: UserInput): User
    deleteUser(id: ID): String
    updateUser(id: ID, user: UserInput): User
  }

  """
  Data types for App
  """
  type User {
    id: ID!
    username: String!
    bio: String
    phoneNumber: String
    profession: String
    createdDate: String
  }

  """
  Data input for App
  """
  input UserInput {
    username: String
    bio: String
    phoneNumber: String
    profession: String
  }
`;
module.exports = typeDefs;
