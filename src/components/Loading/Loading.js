import { View, Text, Modal, ActivityIndicator } from 'react-native';

import { styles } from './styles';

const Loading = ({ isLoading }) => {
  return (
    <Modal transparent={true} animationType="fade" visible={isLoading}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            animating={isLoading}
            size="large"
            color="#970000"
          />
          <Text>Loading data...</Text>
        </View>
      </View>
    </Modal>
  );
};

export default Loading;
