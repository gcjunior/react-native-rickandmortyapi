import { Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import InternalLinkButton from "../../components/InternalLinkButton/InternalLinkButton";

const MainScreen = () => {
    const navigation = useNavigation();

  return (
    <View>
        <InternalLinkButton navigation={navigation} screenName="RestApiScreen" title="Load Rick and Morty using REST API" />
        <Text>{'\n'}</Text>
    </View>
  );
};

export default MainScreen;