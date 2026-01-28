import { memo } from 'react';
import { Image, StyleSheet, View } from 'react-native';

const CharacterListItem = ({ character }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: character.image }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});

export default memo(CharacterListItem);
