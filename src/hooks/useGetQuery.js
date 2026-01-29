import { useEffect } from 'react';

import { useQuery } from '@apollo/client/react';
import { Toast } from 'toastify-react-native';

export const useGetQuery = ({ query, queryName, filters }) => {
  const { loading, error, data } = useQuery(query, {
    variables: filters, // Pass the ID here
  });

  useEffect(() => {
    if (error) {
      Toast.error(`Error: ${error.message || 'An error occurred'}`, 'bottom');
    }
  }, [error]); // Depend on isError and erro

  return {
    item: data ? data[queryName] : {},
    loading,
    error,
  };
};
