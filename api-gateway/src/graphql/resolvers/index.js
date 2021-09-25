//const { GraphQLDateTime } = require("graphql-iso-date");
const userResolver = require("./user");
const scriptResolver = require("./script");

module.exports = [userResolver, scriptResolver];
