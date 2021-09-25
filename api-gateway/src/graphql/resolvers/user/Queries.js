const User = require("#root/graphql/models/UserModel");

module.exports = {
  Query: {
    getAllUsers: async () => {
      const users = await User.find();
      return users;
    },
    getUser: async (parent, args, context, info) => {
      const { id } = args;
      return await User.findById(id);
    },
  },
};
