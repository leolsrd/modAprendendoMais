import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Usuario(props) {
  return (
    <View style={styles.containerBox}>
      <Text style={styles.txtBox}>Nome: {props.data.nome}</Text>
      <Text style={styles.txtBox}>Cargo: {props.data.cargo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerBox: {
    height: 200,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  txtBox: {
    marginLeft: 16,
    color: '#FFF',
    fontSize: 26,
  },
});

export default Usuario;
