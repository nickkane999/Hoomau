const { gql } = require("apollo-server-express");

module.exports = gql`
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
