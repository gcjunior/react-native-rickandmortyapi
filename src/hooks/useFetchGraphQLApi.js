import { gql } from '@apollo/client';
import { useLazyQuery } from '@apollo/client/react';
import debounce from 'lodash.debounce';
import { useCallback, useEffect } from 'react';

export const useFetchGraphQLApi = ({ searchText, currentPage }) => {
  const GET_CHARACTERS = gql`
    query Characters($page: Int, $name: String) {
      characters(page: $page, filter: { name: $name }) {
        info {
          count
          pages
        }
        results {
          id
          name
          species
          gender
          image
        }
      }
    }
  `;
  const [loadSearchResults, { loading, error, data }] =
    useLazyQuery(GET_CHARACTERS);

  // Debounce the network request
  const debouncedLoad = useCallback(
    debounce((searchText, currentPage) => {
      const filter = {
        ...(currentPage !== null && { page: currentPage }),
        ...(searchText?.length > 0 && { name: searchText }),
      };
      loadSearchResults({ variables: filter });
    }, 300),
    [], // Empty dependency array ensures the debounced function is only created once
  );

  useEffect(() => {
    debouncedLoad(searchText, currentPage);
  }, [searchText, currentPage, debouncedLoad]);

  const fetchData = data?.characters;
  const pages = fetchData?.info?.pages;
  const count = fetchData?.info?.count;
  const fetchResults = fetchData?.results;

  return {
    isLoading: loading,
    error,
    fetchSearchResults: fetchResults,
    pages,
    count,
  };
};
