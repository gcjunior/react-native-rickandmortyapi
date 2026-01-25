import React, { useContext, useState } from 'react';

import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { AuthContext } from '../../context/AuthContextProvider';

const SignInScreen = ({}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const { signIn } = useContext(AuthContext); //if you dont' use context than save token using async AsyncStorage.setItem

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header_image}>
          <Image
            style={styles.login_header_logo}
            source={require('./../../assets/bunny.png')}
          />
        </View>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Login: emilys"
          value={login}
          onChangeText={setLogin}
          autoCapitalize="none"
        />
        {errors.login && <Text style={styles.error}>{errors.login}</Text>}

        <TextInput
          style={styles.input}
          placeholder="Password: emilyspass"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {errors.password && <Text style={styles.error}>{errors.password}</Text>}

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            signIn({
              login: login,
              password: password,
              setErrors: setErrors,
              setLoading: setLoading,
            })
          }
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Submit</Text>
          )}
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  header_image: {
    alignItems: 'center',
  },
  login_header_logo: {},
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#F36523',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 5,
  },
  error: {
    color: 'red',
    marginBottom: 10,
    fontSize: 12,
  },
  button: {
    backgroundColor: '#F36523',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SignInScreen;
