//const { GraphQLDateTime } = require("graphql-iso-date");
import _ from "lodash";
const userResolver = require("./userResolver");

console.log("here");
console.log(userResolver);
module.exports = _.merge(userResolver);
