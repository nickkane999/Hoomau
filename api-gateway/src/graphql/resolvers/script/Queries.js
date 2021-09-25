const Script = require("#root/graphql/models/ScriptModel");

module.exports = {
  Query: {
    getAllScripts: async () => {
      const scripts = await Script.find();
      return scripts;
    },
    getScript: async (parent, args, context, info) => {
      const { id } = args;
      return await Script.findById(id);
    },
  },
};
