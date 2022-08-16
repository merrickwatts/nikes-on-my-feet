
const { AuthenticationError } = require("apollo-server-express");
const { User, Review, Shoe } = require("../models");
const { signToken } = require("../utils/auth");
const stripe = require('stripe')('pk_test_51LUhHjBI8BK3kUvgExFVe8XzCnsEdxlrAC4rCjIRym30NqJoVSRgHelZBSJBUUOmmEz4tjeSg93YwXATEPx6gy5w007u5LQju7');


const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          '-__v -password'
        );

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return User.find().select('-__v -password');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).select('-__v -password');
    },
    shoes: async () => {
      return Shoe.find();
    },
    // query payment that sites user by user id and populates their shoe array and then calls stripe.shoeArray.create and
    //add shoe by shoename and price 
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
  
    // add product mutation that finds user by context.user._id and pushes an item by it's id to their shoe array.
    // remove product mutation that finds a user by contex.user._id and pulls an item by it's id by their shoe array.
  },
};

module.exports = resolvers;
