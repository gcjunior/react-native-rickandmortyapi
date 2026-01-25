import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'core-js/features/promise';
import ToastManager from 'toastify-react-native';

import AuthContextProvider from './src/context/AuthContextProvider';
import { useIsSignedIn, useIsSignedOut } from './src/hooks/useIsSignedIn';
import GraphQLApiScreen from './src/screens/GraphQLApiScreen/GraphQLApiScreen';
import MainScreen from './src/screens/MainScreen/MainScreen';
import RestApiScreen from './src/screens/RestApiScreen/RestApiScreen';
import SignInScreen from './src/screens/SignInScreen/SignInScreen';

const RootStack = createNativeStackNavigator({
  screens: {
    SignInScreen: {
      if: useIsSignedOut,
      screen: SignInScreen,
      options: {
        title: 'Sign in',
      },
    },
    MainScreen: {
      if: useIsSignedIn,
      screen: MainScreen,
      options: { title: 'Menu' },
    },
    RestApiScreen: {
      if: useIsSignedIn,
      screen: RestApiScreen,
      options: { title: 'Rick and Morty - REST API Call' },
    },
    GraphQLApiScreen: {
      if: useIsSignedIn,
      screen: GraphQLApiScreen,
      options: { title: 'Rick and Morty - GraphQL API Call' },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://rickandmortyapi.com/graphql' }), // Replace with your GraphQL server endpoint
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <AuthContextProvider>
        <Navigation />
        <ToastManager />
      </AuthContextProvider>
    </ApolloProvider>
  );
}
