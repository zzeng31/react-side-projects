import { gql, useLazyQuery } from "@apollo/client";
import { useState } from "react";
const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String) {
    characters(filter: { name: $name }) {
      results {
        id
        name
        image
        location {
          name
        }
      }
    }
  }
`;
export const useSearch = () => {
  const [name, setName] = useState("");
  const setValue = (value) => {
    setName(value);
  };
  const [getCharacter, { loading, error, data, called }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: {
        name: name,
      },
    }
  );
  const executeQuery = () => {
    getCharacter({
      variables: {
        name: name,
      },
    });
  };
  return {
    setValue,
    executeQuery,
    loading,
    error,
    data,
    called,
  };
};
