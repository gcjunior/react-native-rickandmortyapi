import React from 'react';
import { View, StyleSheet } from 'react-native';

const TriangleLeft = ({ size, color }) => {
  const styles = StyleSheet.create({
    triangle: {
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderTopWidth: size / 2,
      borderBottomWidth: size / 2,
      borderRightWidth: size, // This border creates the left-pointing triangle
      borderTopColor: 'transparent',
      borderBottomColor: 'transparent',
      borderRightColor: color,
      position: 'absolute',
      top: '50%',
      left: '44%',
      transform: 'translate(-50%, -50%)',
    },
  });

  return <View style={styles.triangle} />;
};

export default TriangleLeft;
