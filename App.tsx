import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainScreen from './src/screens/MainScreen/MainScreen';
import RestApiScreen from './src/screens/RestApiScreen/RestApiScreen'


const RootStack = createNativeStackNavigator({
  screens: {
    MainScreen: {
      screen: MainScreen,
    },
    RestApiScreen: {
      screen: RestApiScreen
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
