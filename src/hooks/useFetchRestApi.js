import { useCallback, useEffect, useMemo, useState } from 'react';
import { Toast } from 'toastify-react-native';
import { debounce } from 'lodash'; // Import as a named export

const useFetchRestApi = ({
  searchText,
  currentPage
}) => {
  const [fetchResults, setFetchResults] = useState(0);
  const fetchSearchResults = useCallback(
    async (searchTerm, selectedPage) => {
      let query = searchTerm ? `?name=${searchTerm}&` : '?';
      query += `page=${selectedPage}`;
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${query}`,
        );
        if (!response.ok) {
          throw response;
        }
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setFetchResults(json);
      } catch (err) {
        setFetchResults(null);
        if (err) {
          err.json().then(({ error: error }) => {
            Toast.error(error, 'bottom');
          });
        }
      }
    },
    [setFetchResults],
  );

  const debouncedSearch = useMemo(
    () =>
      debounce(
        (nextQuery, selectedPage) =>
          fetchSearchResults(nextQuery, selectedPage),
        300,
      ),
    [fetchSearchResults],
  );

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  useEffect(() => {
    debouncedSearch(searchText, currentPage);
  }, [searchText, currentPage, debouncedSearch]);

  console.log(fetchResults);

  return {
    totalItems: fetchResults?.info?.count ?? 0,
    data: fetchResults?.results ?? [],
  };
};

export default useFetchRestApi;
