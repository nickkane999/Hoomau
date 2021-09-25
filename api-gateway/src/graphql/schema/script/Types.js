const { gql } = require("apollo-server-express");

module.exports = gql`
  """
  Data types for App
  """
  type Script {
    id: ID!
    title: String
    description: String
    createdUser: User
    code: String
    createdDate: String
    favorites: [User]
  }

  """
  Data input for App
  """
  input ScriptInput {
    title: String
    description: String
    code: String
  }
`;
