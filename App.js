/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';


import SwipeScreen from './app/commonFunction/SwipeScreen';


const App = () => {


  return (
    <View style={styles.container}>
      <SwipeScreen />
    </View>
  );
};

const styles = StyleSheet.create({

  container: { flex: 1, justifyContent: 'center' },
});

export default App;
