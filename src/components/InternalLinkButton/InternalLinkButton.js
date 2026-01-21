import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

const InternalLinkButton = ({ navigation, screenName, title }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate(screenName)}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default InternalLinkButton;
