
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  tableContainer: {
    borderWidth: 0,
    borderColor: '#ccc',
    marginTop: 10,
    display: 'flex',
    height: '70%'
  },
  tableRow: {
    flexDirection: 'row', // Aligns children (cells) horizontally
    gap: 3,
    alignItems: 'center',
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#970000',
  },
  headerCell: {
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'left',
    backgroundColor: '#C33530',
    color: '#ffffff',
  },
  dataCell: {
    padding: 10,
    textAlign: 'left',
  },
  nestedCell: {
    flexDirection: 'row', // Aligns children vertically within this specific cell
    gap: 3,
    alignItems: 'center',
  },
  cellFlex1: {
    flex: 1, // Takes 1/4 of the total space in the row
  },
  cellFlex2: {
    flex: 2, // Takes 2/4 of the total space in the row
  },
  tinyLogo: {
    width: 30,
    height: 30,
  }
});
