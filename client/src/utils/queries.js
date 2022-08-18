// one apollo client is connected to backend apollo server in app.js insert queries here.
import { gql } from "@apollo/client";

export const QUERY_SHOES = gql`
  query Query {
    shoes {
      _id
      shoe_name
      price
      shoe_description
      shoe_size
      photo_ref
      gender
      reviews {
        _id
        reviewBody
        username
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;
