/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  NativeModules,
  Button,
} from 'react-native';

const App = () => {
  const {TESTAPP} = NativeModules;
  const LoginUser = () => {
    TESTAPP.createLOGINEvent('arshad', '123445');
  };
  return (
    <SafeAreaView style={styles.engin}>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>test</Text>
        <Button title="Login your user" color="#841584" onPress={LoginUser} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  engin: {
    flex: 1,
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
