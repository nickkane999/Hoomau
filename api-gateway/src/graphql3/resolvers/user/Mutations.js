const User = require("#root/graphql3/models/UserModel");

module.exports = {
  Mutation: {
    createUser: async (parent, args, context, info) => {
      const { username, bio, phonenumber, profession } = args.user;
      const createdDate = new Date().toTimeString();
      const user = new User({
        username,
        bio,
        phonenumber,
        profession,
        createdDate,
      });
      await user.save();
      return user;
    },
    deleteUser: async (parent, args, context, info) => {
      const { id } = args;
      await User.findByIdAndDelete(id);
      return "User was deleted";
    },
    updateUser: async (parent, args, context, info) => {
      const { id } = args;
      const { username, bio, phonenumber, profession, createdDate } = args.user;
      const user = await User.findByIdAndUpdate(
        id,
        { username, bio, phonenumber, profession, createdDate },
        { new: true }
      );
      return user;
    },
  },
};
