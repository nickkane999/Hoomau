import { gql } from "@apollo/client";

module.exports = gql`
  query getUser($id: ID) {
    getUser(id: $id) {
      id
      username
      bio
      phoneNumber
      profession
      createdDate
    }
  }
`;
