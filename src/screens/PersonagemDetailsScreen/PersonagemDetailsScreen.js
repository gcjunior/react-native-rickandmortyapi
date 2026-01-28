import React from 'react';
import { GET_CHARACTER, GET_CHARACTER_NAME } from './constants';

import { StyleSheet, Text, View } from 'react-native';
import { useGetQuery } from '../../hooks/useGetQuery';
import Loading from './../../components/Loading/Loading';

const PersonagemDetailsScreen = ({ navigation, route }) => {
  const { personagemId } = route.params;

  const { loading, error, item } = useGetQuery({
    filters: { id: personagemId },
    query: GET_CHARACTER,
    queryName: GET_CHARACTER_NAME,
  });

  return (
    <View style={styles.container}>
      {loading && <Loading />}
      <View style={styles.container}>
        <Text style={styles.label}>Name: {item.name}</Text>
        <Text style={styles.label}>ID: {item.species}</Text>
        <Text style={styles.label}>Specie: {item.status}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, marginTop: 30 },
  label: { fontWeight: 'bold' },
});

export default PersonagemDetailsScreen;
