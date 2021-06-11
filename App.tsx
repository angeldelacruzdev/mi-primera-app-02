import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import FlexScreen from './src/screens/FlexScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlexScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
