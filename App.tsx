import * as React from 'react';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import 'core-js/features/promise'
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './src/screens/MainScreen/MainScreen';
import RestApiScreen from './src/screens/RestApiScreen/RestApiScreen';
import GraphQLApiScreen from './src/screens/GraphQLApiScreen/GraphQLApiScreen'

const RootStack = createNativeStackNavigator({
  screens: {
    MainScreen: {
      screen: MainScreen,
      options: { title: 'Menu' },
    },
    RestApiScreen: {
      screen: RestApiScreen,
      options: { title: 'Rick and Morty - REST API Call'},
    },
    GraphQLApiScreen: {
      screen: GraphQLApiScreen,
      options: { title: 'Rick and Morty - GraphQL API Call'},
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://rickandmortyapi.com/graphql' }), // Replace with your GraphQL server endpoint
  cache: new InMemoryCache(),
});

export default function App() {
  return <ApolloProvider client={client}><Navigation /></ApolloProvider>;
}
