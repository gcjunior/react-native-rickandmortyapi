// useIsSignedIn.js or part of AuthContext.js
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContextProvider'; // adjust path as needed

const useIsSignedIn = () => {
  const isSignedIn = useContext(AuthContext);
  return isSignedIn.accessToken;
};

const useIsSignedOut = () => {
  return !useIsSignedIn();
};

export { useIsSignedIn, useIsSignedOut };
