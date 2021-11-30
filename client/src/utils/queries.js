import { gql } from '@apollo/client';

export const GET_ME = gql`
  {
    me {
        _id
      username
      email
      savedBooks {
        bookId
        image
        title
        authors
        description
      }
    }
  }
`;
