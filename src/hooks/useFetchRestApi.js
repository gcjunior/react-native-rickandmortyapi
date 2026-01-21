import { useCallback, useEffect, useMemo } from 'react';
import { Toast } from 'toastify-react-native'
import { debounce } from 'lodash'; // Import as a named export

const useFetchRestApi = ({ searchText, currentPage, setTotalItems, setTotalPages, 
    setPersonagens  }) => {
  const fetchSearchResults = useCallback(
    async (searchTerm, selectedPage) => {
      let query = searchTerm ? `?name=${searchTerm}&` : '?';
      query += `page=${selectedPage}`;
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${query}`,
        );
        if (!response.ok) { throw response }
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setTotalItems(json.info.count);
        setTotalPages(json.info.pages);
        setPersonagens(json.results);
      } catch (err) {
        setTotalItems(0);
        setTotalPages(0);
        setPersonagens([]);
        if (err) {
          err.json().then(({error: error}) => {
            Toast.error(error, 'bottom');
          })
        }
      }
    },
    [setPersonagens, setTotalItems, setTotalPages],
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

  return {
    fetchSearchResults,
    debouncedSearch,
  }
};

export default useFetchRestApi;
