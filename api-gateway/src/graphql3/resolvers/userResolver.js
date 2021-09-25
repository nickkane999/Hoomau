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

const info = {
  Query: {
    getAllUsers: async () => {
      const users = await User.find();
      return users;
    },
    getUser: async (parent, args, context, info) => {
      const users = await User.find();
      return users;
    },
  },
};
//.toDateString()
//console.log(info);
module.exports = info;
