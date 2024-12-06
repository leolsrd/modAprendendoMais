import React, {useState, useEffect, useMemo, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [input, setInput] = useState('');
  const [nome, setNome] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    async function loadData() {
      await AsyncStorage.getItem('@nome').then(value => {
        setNome(value);
      });
    }

    loadData();
  }, []);

  async function gravarNome() {
    await AsyncStorage.setItem('@nome', input);
    setNome(input);

    setInput('');
  }

  // ! Sem useMemo
  // const letrasNome = nome.length;
  // * Utilizando o useMemo
  const letrasNome = useMemo(() => {
    console.log('Pegando a quantidade de letras');
    return nome.length;
  }, [nome]);

  function chamarInput() {
    // ? Para dar focus no input ao clicar no botão
    // inputRef.current.focus();
    // ? Para limpar o input ao clicar no botão
    inputRef.current.clear();
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewInput}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={texto => setInput(texto)}
          ref={inputRef}
        />

        <TouchableOpacity onPress={gravarNome}>
          <Text style={styles.botao}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.nome}>Possui: {letrasNome} letras</Text>

      <TouchableOpacity style={styles.btnUseRef} onPress={chamarInput}>
        <Text>Chamar Input</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 35,
  },
  viewInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: 350,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
  },
  botao: {
    backgroundColor: '#222',
    color: '#FFF',
    height: 40,
    padding: 10,
    marginLeft: 4,
  },
  nome: {
    marginTop: 15,
    fontSize: 30,
  },
  btnUseRef: {
    backgroundColor: 'rgb(74, 98, 232)',
    borderWidth: 1,
    borderColor: 'rgb(74, 98, 232)',
    padding: 12,
    borderRadius: 4,
    marginTop: 10,
  },
});
