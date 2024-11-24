import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Pessoa(props) {
  return (
    <View style={styles.areaPessoa}>
      <Text style={styles.textoPessoa}>Nome: {props.data.nome}</Text>
      <Text style={styles.textoPessoa}>Idade: {props.data.idade} anos</Text>
      <Text style={styles.textoPessoa}>Email: {props.data.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  areaPessoa: {
    backgroundColor: '#f8f7f7',
    height: 200,
    marginBottom: 15,
    justifyContent: 'center',
  },
  textoPessoa: {
    fontSize: 20,
    color: '#000',
    marginLeft: 10,
  },
});

export default Pessoa;
