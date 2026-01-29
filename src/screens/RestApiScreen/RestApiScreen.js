import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import Header from '../../components/Header/Header';
import Pagination from '../../components/Pagination/Pagination';
import Table from '../../components/Table/Table';
import useFetchRestApi from '../../hooks/useFetchRestApi';
import { styles } from './styles';

const RestApiScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const contentPerPage = 20;

  const { data, totalItems } = useFetchRestApi({
    searchText,
    currentPage,
  });

  const onChangeSearchPersonagens = val => {
    setSearchText(val);
    setCurrentPage(1);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.col}>
        <Text style={styles.nameLabel}>Nome do Personagem</Text>
        <TextInput
          placeholder="Type here the name of your character"
          onChangeText={onChangeSearchPersonagens}
          defaultValue={searchText}
          style={styles.searchInput}
        />
      </View>
      {data.length > 0 && (
        <Pagination
          data={data}
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

export default RestApiScreen;
