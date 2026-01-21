import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  personagem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 0 3px rgba(0, 0, 0, 0.3)',
    maxWidth: '400px',
    margin: '20px auto',
    padding: '15px 10px',
    background: '#fff',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 4,
    marginTop: 20,
    borderWidth: 0,
  },
  pageItem: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  pageButton: {
    marginHorizontal: 2,
    borderRadius: 40,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#d42025',
    color: '#fff',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activePageButton: {
    backgroundColor: '#d42025',
    borderColor: '#d42025',
  },
  activePageText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  pageText: {
    color: '#d42025',
    fontWeight: 'bold',
    fontSize: 16,
  },
  navButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 0,
    borderColor: '#d42025',
  },
  disabledButton: {
    opacity: 0.5,
  },
});
