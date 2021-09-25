const Script = require("#root/graphql/models/ScriptModel");

module.exports = {
  Mutation: {
    createScript: async (parent, args, context, info) => {
      const { title, description, code } = args.script;
      const createdDate = new Date().toTimeString();
      const script = new Script({
        title,
        description,
        code,
        createdDate,
      });
      await script.save();
      return script;
    },
    deleteScript: async (parent, args, context, info) => {
      const { id } = args;
      await Script.findByIdAndDelete(id);
      return "Script was deleted: " + id;
    },
    updateScript: async (parent, args, context, info) => {
      const { id } = args;
      const { title, description, code } = args.script;
      const script = await Script.findByIdAndUpdate(
        id,
        { title, description, code },
        { new: true }
      );
      return script;
    },
  },
};
