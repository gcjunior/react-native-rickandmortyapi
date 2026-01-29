import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import Header from '../../components/Header/Header';
import Loading from '../../components/Loading/Loading';
import Pagination from '../../components/Pagination/Pagination';
import Table from '../../components/Table/Table';
import { useFetchGraphQLApi } from '../../hooks/useFetchGraphQLApi';
import { styles } from './styles';

const GraphQLApiScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const contentPerPage = 20;

  const {
    fetchSearchResults: personagens,
    count: totalItems,
    isLoading,
  } = useFetchGraphQLApi({
    searchText,
    currentPage,
  });

  const onChangeSearchPersonagens = val => {
    setSearchText(val);
    setCurrentPage(1);
  };

  return (
    <View style={styles.mainView}>
      <Header />
      <View style={styles.col}>
        <Text style={styles.nameLabel}>Nome do Personagem</Text>
        <TextInput
          placeholder=""
          onChangeText={onChangeSearchPersonagens}
          defaultValue={searchText}
          style={styles.searchInput}
        />
      </View>
      {isLoading && <Loading />}
      {personagens?.length > 0 && (
        <Pagination
          data={personagens}
          RenderComponent={Table}
          buttonConst={3}
          contentPerPage={contentPerPage}
          siblingCount={1}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalItems={totalItems}
        />
      )}
    </View>
  );
};

export default GraphQLApiScreen;
