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
  h1: {
    textAlign: 'center',
  },
  small: {
    border: '2px solid #777',
    borderRadius: '7px',
    padding: '5px 12px',
    color: '#777',
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
  paginationItem: {
    borderColor: '#d42025',
    marginHorizontal: 6,
    color: '#fff',
    width: 40,
    height: 48,
    borderRadius: 40,
    borderWidth: 5,
  },
  paginationItemSpan: {
    color: '#fff',
  },
  pageButton: {
    marginHorizontal: 2,
    borderRadius: 40,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#d42025',
    color: '#fff',
    width: 40, // Equal width and height for a circle
    height: 40,
    justifyContent: 'center', // Centers children vertically
    alignItems: 'center', // Centers children horizontally
  },
  activePageButton: {
    backgroundColor: '#d42025', // Active page background color
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
  prev: {
    background: '#fff',
    border: 'none',
    padding: '10px',
    color: 'blue',
    boxShadow: '0 0 3px rgba(0, 0, 0, 0.4)',
    margin: '0 10px',
    cursor: 'pointer',
  },
  next: {
    background: '#fff',
    border: 'none',
    padding: '10px',
    color: 'blue',
    boxShadow: '0 0 3px rgba(0, 0, 0, 0.4)',
    margin: '0 10px',
    cursor: 'pointer',
  },
  paginationItemActive: {
    border: '1px solid #888',
    color: '#888',
    pointerEvents: 'none',
  },
  prevDisabled: {
    pointerEvents: 'none',
    boxShadow: 'none',
    color: '#999',
  },
  nextDisabled: {
    pointerEvents: 'none',
    boxShadow: 'none',
    color: '#999',
  },
  navButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 0,
    borderColor: '#d42025',
  },
  navButtonText: {
    fontSize: 18,
    color: '#d42025',
  },
  disabledButton: {
    opacity: 0.5, // Visually indicate disabled state
  },
});
