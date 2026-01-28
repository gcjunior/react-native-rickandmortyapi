import { useContext } from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import InternalLinkButton from '../../components/InternalLinkButton/InternalLinkButton';
import { AuthContext } from '../../context/AuthContextProvider';

const MainScreen = () => {
  const navigation = useNavigation();
  const { signOut } = useContext(AuthContext);

  return (
    <View>
      <InternalLinkButton
        navigation={navigation}
        screenName="RestApiScreen"
        title="Load Rick and Morty using REST API"
      />
      <InternalLinkButton
        navigation={navigation}
        screenName="GraphQLApiScreen"
        title="Load Rick and Morty using GraphQL API"
      />
      <InternalLinkButton
        navigation={navigation}
        screenName="GraphQLApiInfiniteScrollListingScreen"
        title="Load Rick and Morty using GraphQL API, Infinite Scroll and FlashList component"
      />
      <InternalLinkButton
        navigation={navigation}
        screenName="RestApiInfiniteScrollScreen"
        title="Load Rick and Morty using Rest API, Infinite Scroll and FlatList component"
      />
      <Button onPress={signOut} title='Sign Out' />
    </View>
  );
};

export default MainScreen;
