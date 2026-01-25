import React, { useContext, useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import Pagination from '../../components/Pagination/Pagination';
import Table from '../../components/Table/Table';
import { AuthContext } from '../../context/AuthContextProvider';
import useFetchRestApi from '../../hooks/useFetchRestApi';
import { styles } from './styles';

const RestApiScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const contentPerPage = 20;

  const { user } = useContext(AuthContext);
  const { firstName, lastName } = { ...user };

  const { data, totalItems } = useFetchRestApi({
    searchText,
    currentPage,
  });

  const onChangeSearchPersonagens = val => {
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
          <Text
            style={styles.labelCandidato}
          >{`${firstName} ${lastName}`}</Text>
        </View>
      </View>

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
