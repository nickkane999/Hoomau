const { gql } = require("apollo-server-express");
const types = require("./Types");
const queries = require("./Queries");
const mutations = require("./Mutations");

module.exports = [types, queries, mutations];
