// one apollo client is connected to backend apollo server in app.js insert queries here.
import { gql } from "@apollo/client";

export const QUERY_SHOES = gql`
  query Query {
    shoes {
      shoe_name
      price
      shoe_description
      shoe_size
      photo_ref
      gender
    }
  }
`;
