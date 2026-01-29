import { useCallback, useEffect, useRef, useState } from 'react';
import { ActivityIndicator, FlatList, useWindowDimensions } from 'react-native';

import CharacterListItem from '../../components/CharacterListItem/CharacterListItem';

const initialPage = 'https://rickandmortyapi.com/api/character';

const RestApiInfiniteScrollScreen = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [nextPage, setNextPage] = useState('');

  const { width } = useWindowDimensions();

  const fetchPage = async url => {
    if (loading) {
      return;
    }

    setLoading(true);
    const response = await fetch(url);
    const responseJson = await response.json();

    setItems(existingItems => {
      return [...existingItems, ...responseJson.results];
    });
    setNextPage(responseJson.info.next);
    setLoading(false);
  };

  const onRefresh = () => {
    if (loading) {
      return;
    }
    setItems([]);
    fetchPage(initialPage);
  };

  useEffect(() => {
    fetchPage(initialPage);
  }, []);

  const renderItem = useCallback(
    ({ item }) => <CharacterListItem character={item} />,
    [],
  );

  const itemHeight = width + 40;

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {
        minimumViewTime: 500,
        itemVisiblePercentThreshold: 50,
      },
      onViewableItemsChanged: ({ changed, viewableItems }) => {
        changed.forEach(changedItem => {
          if (changedItem.isViewable) {
            console.log('++ Impression for: ', changedItem.item.id);
          }
        });
      },
    },
  ]);

  if (items.length === 0) {
    return null;
  }

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      contentContainerStyle={{ gap: 0 }}
      // columnWrapperStyle={{ gap: 5 }}
      onEndReached={() => fetchPage(nextPage)}
      onEndReachedThreshold={5}
      ListFooterComponent={() => loading && <ActivityIndicator />}
      refreshing={loading}
      onRefresh={onRefresh}
      debug
      initialNumToRender={3}
      getItemLayout={(data, index) => ({
        length: itemHeight,
        offset: (itemHeight + 5) * index,
        index,
      })}
      viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      // numColumns={2} // if numColumns is defined than you need columnWrapperStyle gap: ...
    />
  );
};

export default RestApiInfiniteScrollScreen;
