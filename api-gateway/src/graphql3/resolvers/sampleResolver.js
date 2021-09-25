/*
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { combineResolvers } = require('graphql-resolvers');

const User = require('../database/models/user');
const Task = require('../database/models/task');
const { isAuthenticated } = require('./middleware');
const PubSub = require('../subscription');
const { userEvents } = require('../subscription/events');
*/
//const Post = require("#root/graphql3/models/PostModel");
const User = require("#root/graphql3/models/UserModel");

const resolvers = {
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

module.exports = resolvers;
