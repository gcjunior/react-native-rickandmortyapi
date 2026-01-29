import React, { useContext } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { AuthContext } from './../../context/AuthContextProvider';

const Header = () => {
  const { user } = useContext(AuthContext);
  const { firstName, lastName } = { ...user };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.labelHeader}>
          <Text style={styles.underline}>BUS</Text>CA RICK AND MORTY
        </Text>
        <Text style={styles.labelCandidato}>{`${firstName} ${lastName}`}</Text>
      </View>
    </View>
  );
};

export default Header;