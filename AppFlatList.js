import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

export default function App() {
  const [feed, setFeed] = useState([
    {id: '1', nome: 'Matheus', idade: 50, email: 'matheus@matheus.com'},
    {id: '2', nome: 'Léo Lourenço', idade: 50, email: 'leo.lsrd@gmail.com'},
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

function Pessoa(props) {
  return (
    <View style={styles.areaPessoa}>
      <Text style={styles.textoPessoa}>Nome: {props.data.nome}</Text>
      <Text style={styles.textoPessoa}>Idade: {props.data.idade}</Text>
      <Text style={styles.textoPessoa}>Email: {props.data.email}</Text>
    </View>
  );
}
