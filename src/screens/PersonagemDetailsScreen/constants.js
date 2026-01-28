import { gql } from '@apollo/client';

export const GET_CHARACTER_NAME = 'character';

export const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name
      image
      species
      status
    }
  }
`;
