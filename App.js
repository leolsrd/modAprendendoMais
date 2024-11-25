import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Slider from '@react-native-community/slider';

export default function App() {
  const [valor, setValor] = useState(50);

  return (
    <View style={styles.container}>
      <Slider
        minimumValue={0}
        maximumValue={100}
        value={valor}
        onValueChange={valorSelecionado => setValor(valorSelecionado)}
        minimumTrackTintColor="#B0BFFF"
        maximumTrackTintColor="#FF0000"
        thumbTintColor="green"
      />

      <Text style={styles.textValor}>Valor: {valor.toFixed(0)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
  },
  textValor: {
    fontSize: 24,
    color: '#000',
    marginTop: 20,
    marginLeft: 20,
  },
});
