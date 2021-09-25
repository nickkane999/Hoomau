const queries = require("./Queries");
const mutations = require("./Mutations");
import _ from "lodash";

module.exports = _.merge(queries, mutations);
