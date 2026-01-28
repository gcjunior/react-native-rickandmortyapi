import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';

const Item = ({
  item,
  onItemPress,
}) => (
  <View key={item.id} style={[styles.tableRow, styles.borderBottom]}>
    <TouchableOpacity
      style={[styles.dataCell, styles.cellFlex2, styles.nestedCell]}
      onPress={() => onItemPress(item.id)}
    >
      <Image style={styles.tinyLogo} source={{ uri: item.image }} />
      <Text>{item.name}</Text>
    </TouchableOpacity>
    <Text style={[styles.dataCell, styles.cellFlex1]}>{item.species}</Text>
    <Text style={[styles.dataCell, styles.cellFlex1]}>{item.gender}</Text>
  </View>
);

const Table = ({
  data,
  currentPage,
}) => {
  const navigation = useNavigation();
  const handleOpenPersonamDetailPage = (personagemId) => {
    navigation.navigate('PersonagemDetailsScreen', { personagemId: 2 });
  };

  return (
    <View style={styles.tableContainer} key={currentPage}>
      {/* Table Header Row */}
      <View style={styles.tableRow}>
        <Text style={[styles.headerCell, styles.cellFlex2]}>Name</Text>
        <Text style={[styles.headerCell, styles.cellFlex1]}>Species</Text>
        <Text style={[styles.headerCell, styles.cellFlex1]}>Gender</Text>
      </View>
      {/* Table Data Rows */}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Item item={item} onItemPress={handleOpenPersonamDetailPage} />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Table;
