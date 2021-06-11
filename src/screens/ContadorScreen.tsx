import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Fab from '../components/Fab';

const ContadorScreen = () => {
  const [contador, setContador] = useState(0);

  const decrement = () => {
    if (contador >= 1) {
      setContador(contador - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {contador}</Text>
      <Fab title="+1" onPress={() => setContador(contador + 1)} />
      <Fab title="-1" position="bl" onPress={() => decrement()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {textAlign: 'center', fontSize: 40},
  button: {
    backgroundColor: 'red',
    borderRadius: 100,
  },
});

export default ContadorScreen;
