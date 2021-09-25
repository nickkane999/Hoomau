import Post from "#root/graphql3/models/PostModel";

const allPosts = {
  Query: {
    getUsers: async (parent, args, context, info) => {
      const users = await Post.find();
      return users;
    },
  },
};

export default allPosts;
