import React, { createContext, useCallback, useMemo, useState } from 'react';
import { Toast } from 'toastify-react-native';

export const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const accessToken = useMemo(() => user?.accessToken, [user])

  const validate = ({ login, password, setErrors }) => {
    let valid = true;
    let newErrors = {};

    if (!login.trim()) {
      newErrors.login = 'Login is required';
      valid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const signIn = useCallback(
    async ({ login, password, setErrors, setLoading }) => {
      if (!validate({ login, password, setErrors, setLoading })) return;

      setLoading(true);

      try {
        const response = await fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: login,
            password: password,
            expiresInMins: 5, // optional, defaults to 60
          }),
          credentials: 'include', // Include cookies (e.g., accessToken) in the request
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Login failed');
        }

        // await AsyncStorage.setItem('token', data.token); //store token if needed
        setUser(data);
      } catch (err) {
        Toast.error(err.message, 'bottom');
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const signOut = useCallback(() => {
    setUser(null);
  }, []);

  const returnToken = () => {
    return accessToken
  };

  return (
    <AuthContext.Provider value={{ user, accessToken, signIn, signOut, returnToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
