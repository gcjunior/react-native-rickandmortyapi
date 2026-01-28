import { FlashList } from '@shopify/flash-list';
import { useCallback, useRef } from 'react';
import { ActivityIndicator, Text, View, Button } from 'react-native';
import CharacterListItem from '../../components/CharacterListItem/CharacterListItem';

import { useFetchGraphQLApiInfineScroll } from '../../hooks/useFetchGraphQLApiInfineScroll';
import { styles } from './styles';

const GraphQLApiInfiniteScrollListingScreen = () => {
  const flashListRef = useRef(null);

  const { items, loadMore, loading } = useFetchGraphQLApiInfineScroll({
    flashListRef,
  });

  const renderItem = useCallback(
    ({ item }) => <CharacterListItem character={item} />,
    [],
  );

  const scrollToTop = () => {
    flashListRef.current?.scrollToIndex({ index: 0, animated: true });
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
      <Button onPress={scrollToTop} title={"Scroll to top"} />
      <FlashList
        ref={flashListRef}
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReached={loadMore}
        onEndReachedThreshold={5}
        ListFooterComponent={() => loading && <ActivityIndicator />}
      />
    </View>
  );
};

export default GraphQLApiInfiniteScrollListingScreen;
