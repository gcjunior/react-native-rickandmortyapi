import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 60,
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  col: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'blue',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'red',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
  mainView: {
    padding: 20,
  },
  labelHeader: {
    fontSize: 22,
    fontWeight: '500',
    color: '#C33530',
  },
  labelCandidato: {
    fontSize: 22,
    fontWeight: '300',
    color: '#C33530',
    marginLeft: 'auto',
  },
  error: {
    color: 'red',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  nameLabel: {
    fontSize: 16,
    fontWeight: '300',
    color: '#C33530',
  },
  searchInput: {
    height: 40,
    width: '70%',
    borderWidth: 1,
  },
});
