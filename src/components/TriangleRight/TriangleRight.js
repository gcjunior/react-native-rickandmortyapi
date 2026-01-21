import React from 'react';
import { View, StyleSheet } from 'react-native';

const TriangleRight = ({ size, color }) => {
  const styles = StyleSheet.create({
    triangle: {
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderTopWidth: size / 2,
      borderBottomWidth: size / 2,
      borderLeftWidth: size,
      borderTopColor: 'transparent',
      borderBottomColor: 'transparent',
      borderLeftColor: color,
      position: 'absolute',
      top: '50%',
      left: '54%',
      transform: 'translate(-50%, -50%)',
    },
  });

  return <View style={styles.triangle} />;
};

export default TriangleRight;
