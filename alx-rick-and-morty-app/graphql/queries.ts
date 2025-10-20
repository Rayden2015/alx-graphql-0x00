import { gql } from "@apollo/client";

export const GET_EPISODES = gql`
  query getEpisodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        pages
        next
        prev
        count
      }
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;

export const GET_CHARACTERS = gql`
  query getCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        pages
        next
        prev
        count
      }
      results {
        id
        name
        status
        species
        type
        gender
        image
        origin {
          name
        }
        location {
          name
        }
      }
    }
  }
`;

export const GET_CHARACTER_BY_ID = gql`
  query getCharacterById($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      image
      origin {
        id
        name
        type
        dimension
      }
      location {
        id
        name
        type
        dimension
      }
      episode {
        id
        name
        episode
        air_date
      }
    }
  }
`;

export const GET_LOCATIONS = gql`
  query getLocations($page: Int, $filter: FilterLocation) {
    locations(page: $page, filter: $filter) {
      info {
        pages
        next
        prev
        count
      }
      results {
        id
        name
        type
        dimension
      }
    }
  }
`;