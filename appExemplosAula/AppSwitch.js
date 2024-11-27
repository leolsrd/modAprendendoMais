import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';

export default function App() {
  const [status, setStatus] = useState(false);

  return (
    <View style={styles.container}>
      <Switch
        value={status}
        onValueChange={valorSelecionado => setStatus(valorSelecionado)}
        trackColor={{false: '#121212', true: '#00ff00'}}
        thumbColor="#FF0000"
      />

      <Text style={styles.textValor}>Status: {String(status)}</Text>
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
