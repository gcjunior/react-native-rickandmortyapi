import { gql } from '@apollo/client';
import { useLazyQuery } from '@apollo/client/react';
import { useCallback, useEffect, useState } from 'react';

export const useFetchGraphQLApiInfineScroll = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

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
  const [loadSearchResults, { loading, data }] = useLazyQuery(GET_CHARACTERS);

  useEffect(() => {
    loadSearchResults({ variables: { page } });
  }, [page, loadSearchResults]);

  const loadMore = useCallback(() => {
    setPage(prev => prev + 1);
  }, [setPage]);

  useEffect(() => {
    if (data) {
      setItems(prev => [...prev, ...data.characters.results]);
    }
  }, [data]);

  return {
    loading,
    items,
    loadMore,
  };
};
