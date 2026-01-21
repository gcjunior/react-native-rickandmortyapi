import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import InternalLinkButton from '../../components/InternalLinkButton/InternalLinkButton';

const MainScreen = () => {
  const navigation = useNavigation();

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
    </View>
  );
};

export default MainScreen;
