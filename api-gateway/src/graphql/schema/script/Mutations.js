const { gql } = require("apollo-server-express");

module.exports = gql`
  """
  Main mutations for App
  """
  type Mutation {
    createScript(script: ScriptInput): Script
    deleteScript(id: ID): String
    updateScript(id: ID, script: ScriptInput): Script
  }
`;
