import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import ToastManager from 'toastify-react-native';

import { styles } from './styles';
import Pagination from '../../components/Pagination/Pagination';
import Table from '../../components/Table/Table';
import useFetchRestApi from '../../hooks/useFetchRestApi';

const RestApiScreen = () => {
  const [personagens, setPersonagens] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const contentPerPage = 20;

  const { fetchSearchResults, debouncedSearch } = useFetchRestApi({
    searchText,
    currentPage,
    setTotalItems,
    setTotalPages,
    setPersonagens,
  });

  const onChangeSearchPersonagens = (val) => {
    setSearchText(val);
    setCurrentPage(1);
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.labelHeader}>
            <Text style={styles.underline}>BUS</Text>CA RICK AND MORTY
          </Text>
          <Text style={styles.labelCandidato}>NOME DO CANDIDATO</Text>
        </View>
      </View>

      <View style={styles.col}>
        <Text style={styles.nameLabel}>Nome do Personagem</Text>
        <TextInput
          placeholder=""
          onChangeText={onChangeSearchPersonagens}
          defaultValue={searchText}
          style={styles.searchInput}
        />
      </View>
      {personagens?.length > 0 && (
        <Pagination
          data={personagens}
          RenderComponent={Table}
          buttonConst={3}
          contentPerPage={contentPerPage}
          siblingCount={1}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          totalItems={totalItems}
          fetchSearchResults={fetchSearchResults}
          searchText={searchText}
          debouncedSearch={debouncedSearch}
        />
      )}
      <ToastManager />
    </View>
  );
};

export default RestApiScreen;
