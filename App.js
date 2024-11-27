import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState(0);
  const [sexoSelecionado, setSexoSelecionado] = useState(0);
  const [sexo, setSexo] = useState([
    {key: 1, sexo: 'Masculino'},
    {key: 2, sexo: 'Feminino'},
  ]);

  let sexoItem = sexo.map((value, key) => {
    key++;
    console.log(`Key: ${key}, Valor: ${value.sexo}`);
    return (
      <Picker.Item
        style={styles.pickerSexo}
        key={key}
        value={key}
        label={value.sexo}
      />
    );
  });

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.txtTitle}>Banco Sujeito</Text>
      </View>

      <View style={styles.containerForm}>
        <TextInput
          style={[styles.txtInput, {marginTop: 30}]}
          onChange={text => setNome(text)}
          placeholder="Digite seu nome"
          placeholderTextColor={'#067a6e'}
        />
        <TextInput
          style={styles.txtInput}
          onChange={text => setIdade(text)}
          placeholder="Digite sua idade"
          placeholderTextColor={'#067a6e'}
        />

        <View style={styles.containerPicker}>
          <Picker
            selectedValue={sexoSelecionado}
            onValueChange={(itemValue, itemIndex) =>
              setSexoSelecionado(itemValue)
            }>
            {sexoItem}
          </Picker>
        </View>
        {/* <Text>Sexo selecionado: {sexo[sexoSelecionado - 1].sexo}</Text> */}
        <Text>Sexo selecionado: {sexoSelecionado}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#067a6e',
  },
  containerTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },
  txtTitle: {
    fontSize: 30,
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  containerForm: {
    margin: 10,
    backgroundColor: '#FFF',
    borderRadius: 6,
    height: 400,
  },
  txtInput: {
    color: '#067a6e',
    fontSize: 18,
    borderWidth: 1,
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
    padding: 10,
    borderColor: '#067a6e',
    borderRadius: 6,
  },
  containerPicker: {
    borderWidth: 1,
    borderColor: '#067a6e',
    marginLeft: 20,
    marginTop: 20,
    marginRight: 20,
    borderRadius: 6,
  },
  pickerSexo: {
    fontSize: 18,
    color: '#067a6e',
  },
});
