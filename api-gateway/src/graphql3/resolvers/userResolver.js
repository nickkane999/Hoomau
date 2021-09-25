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
const Post = require("#root/graphql3/models/PostModel");

const info = {
  Query: {
    getAllPosts: async (parent, args, context, info) => {
      const posts = await Post.find();
      return posts;
    },
  },
};
console.log(info);
module.exports = info;
