import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainScreen from './src/screens/MainScreen/MainScreen';


const RootStack = createNativeStackNavigator({
  screens: {
    MainScreen: {
      screen: MainScreen,
    }
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
