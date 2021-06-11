import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BoxObjectModel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
  },
  title: {
    fontSize: 20,
    
  },
});

export default BoxObjectModel;
