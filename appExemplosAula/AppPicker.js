import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Picker} from '@react-native-picker/picker';

export default function App() {
  const [carroSelecionado, setCarroSelecionado] = useState('0');
  const [carros, setCarros] = useState([
    {key: 1, nome: 'Golf 1.6', valor: 62.0},
    {key: 2, nome: 'Saveiro 1.6', valor: 73.0},
    {key: 3, nome: 'Gol 1.0', valor: 37.0},
    {key: 4, nome: 'Sandero 1.0', valor: 32.0},
  ]);

  let carrosItem = carros.map((value, key) => {
    console.log(key, value);
    return <Picker.Item key={key} value={key} label={value.nome} />;
  });

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={carroSelecionado}
        onValueChange={(itemValue, itemIndex) =>
          setCarroSelecionado(itemValue)
        }>
        {carrosItem}
      </Picker>

      <Text style={styles.carros}>Carro: {carros[carroSelecionado].nome}</Text>
      <Text style={styles.carros}>
        Valor: {carros[carroSelecionado].valor.toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
  },
  carros: {
    marginTop: 15,
    fontSize: 25,
  },
});
