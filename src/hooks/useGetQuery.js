import { useQuery } from '@apollo/client/react';

export const useGetQuery = ({ query, queryName, filters }) => {
  const { loading, error, data } = useQuery(query, {
    variables: filters, // Pass the ID here
  });

  return {
    item: data ? data[queryName] : {},
    loading,
    error,
  };
};
