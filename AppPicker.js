import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function App() {
  const [valor, setValor] = useState(50);

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
  },
});
