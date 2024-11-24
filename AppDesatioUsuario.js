import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Usuario from './src/Usuario/indexj';

export default function App() {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.txtBemVindo}>Sejá bem vindo!</Text>
      </View>
      <Usuario data={{nome: 'Léo Lourenço', cargo: 'Estudante'}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 40,
    alignContent: 'center',
    alignItems: 'center',
  },
  txtBemVindo: {
    fontSize: 32,
    fontWeight: '600',
    color: '#000',
  },
});
