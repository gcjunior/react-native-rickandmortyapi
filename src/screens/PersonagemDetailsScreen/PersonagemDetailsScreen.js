import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { useGetQuery } from '../../hooks/useGetQuery';
import Loading from './../../components/Loading/Loading';
import { GET_CHARACTER, GET_CHARACTER_NAME } from './constants';
import Header from '../../components/Header/Header';

const DataRecord = ({ label, value }) => (
  <View style={styles.card}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const PersonagemDetailsScreen = ({ navigation, route }) => {
  const { personagemId } = route.params;

  const { loading, item } = useGetQuery({
    filters: { id: personagemId },
    query: GET_CHARACTER,
    queryName: GET_CHARACTER_NAME,
  });

  return (
    <View style={styles.container}>
      <Header />
      {loading && <Loading />}
      <View styles={styles.row}>
        <DataRecord label="Name" value={item.name} />
        <DataRecord label="Species" value={item.species} />
        <DataRecord label="Status" value={item.status} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    flexDirection: 'row', // Aligns label and value horizontally [2]
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    // Android Shadow
    elevation: 3,
    // iOS Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  label: {
    fontSize: 16,
    color: '#666',
    fontWeight: '600',
  },
  value: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default PersonagemDetailsScreen;
