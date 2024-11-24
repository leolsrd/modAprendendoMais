import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Pessoa from './src/Pessoa';

export default function App() {
  const [feed, setFeed] = useState([
    {id: '1', nome: 'Matheus', idade: 50, email: 'matheus@matheus.com'},
    {id: '2', nome: 'Léo Lourenço', idade: 41, email: 'leo.lsrd@gmail.com'},
    {id: '3', nome: 'Jussara', idade: 67, email: 'jussara@jussara.com'},
    {id: '4', nome: 'Ana Clara', idade: 9, email: 'anaclara@anaclara.com'},
    {id: '5', nome: 'Petrônio', idade: 39, email: 'petronio@petronio.com'},
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={feed}
        renderItem={({item}) => <Pessoa data={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(148, 148, 148)',
  },
});
