const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }

  type Shoe {
    shoe_name: String
    price: String
    shoe_description: String
    shoe_size: String
    photo_ref: String
    gender: String
  }

  type Review {
    _id: ID
    reviewText: String
    createdAt: String
    username: String
    user_id: String
    product_id: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    reviews(product_id: String): [Review]
    shoes: [Shoe]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;
// once resolvers are created need to add them to type query and type mutation objects.
module.exports = typeDefs;
