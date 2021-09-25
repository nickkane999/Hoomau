const { gql } = require("apollo-server-express");
const userTypes = require("./Types");

module.exports = gql`
  """
  Main queries for App
  """
  type Query {
    getAllUsers: [User]
    getUser(id: ID): User
  }
`;
