const { gql } = require("apollo-server-express");

module.exports = gql`
  """
  Main mutations for App
  """
  type Mutation {
    createUser(user: UserInput): User
    deleteUser(id: ID): String
    updateUser(id: ID, user: UserInput): User
  }
`;
