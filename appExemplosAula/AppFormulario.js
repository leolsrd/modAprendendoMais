import Slider from '@react-native-community/slider';
import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Switch,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState(0);
  const [valorSaldo, setValorSaldo] = useState(0);
  const [estudante, setEstudante] = useState(false);
  const [sexoSelecionado, setSexoSelecionado] = useState(0);
  const [sexo, setSexo] = useState([
    {key: 1, sexo: 'Masculino'},
    {key: 2, sexo: 'Feminino'},
  ]);

  let sexoItem = sexo.map((value, key) => {
    key++;
    return (
      <Picker.Item
        style={styles.pickerSexoItem}
        key={key}
        value={key}
        label={value.sexo}
      />
    );
  });

  function enviarCadastro() {
    alert(`\n
      Nome: ${nome}
      Idade: ${idade}
      Sexo: ${sexoSelecionado}
      Saldo atual: ${valorSaldo}
      Estudante: ${estudante ? 'Sim' : 'Não'}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.txtTitle}>Banco Sujeito</Text>
      </View>

      <View style={styles.containerForm}>
        <TextInput
          style={[styles.txtInput, {marginTop: 30}]}
          onChangeText={text => setNome(text)}
          placeholder="Digite seu nome"
          placeholderTextColor={'#067a6e'}
        />
        <TextInput
          style={styles.txtInput}
          onChangeText={text => setIdade(text)}
          placeholder="Digite sua idade"
          placeholderTextColor={'#067a6e'}
        />

        <View style={styles.containerPicker}>
          <Picker
            dropdownIconColor={'#067a6e'}
            selectedValue={sexoSelecionado}
            onValueChange={(itemValue, itemIndex) =>
              setSexoSelecionado(itemValue)
            }>
            {sexoItem}
          </Picker>
        </View>

        <Text style={styles.txtSlider}>Informe seu saldo atual:</Text>
        <Slider
          maximumTrackTintColor="#848484"
          // minimumTrackTintColor="yellow"
          style={styles.Slider}
          minimumValue={0}
          maximumValue={5000}
          lowerLimit={0}
          step={valorSaldo >= 1000 ? 100 : 10}
          value={valorSaldo}
          onValueChange={valorSelecionado => setValorSaldo(valorSelecionado)}
        />
        <Text style={styles.txtSaldo}>
          {valorSaldo <= 1000
            ? `Saldo: ${valorSaldo.toFixed(2)}`
            : `Saldo aproximado: ${valorSaldo.toFixed(2)}`}
        </Text>

        <View style={styles.containerSwitch}>
          <View style={styles.rowSwitch}>
            <View style={styles.col1Switch}>
              <Text style={styles.txtSwitch}>
                Estudante: {estudante ? 'SIM' : 'NÃO'}
              </Text>
            </View>
            <View style={styles.col2Switch}>
              <Switch
                trackColor={{false: '#dfdfdf', true: '#067a6e'}}
                value={estudante}
                onValueChange={valSelecionado => setEstudante(valSelecionado)}
              />
            </View>
          </View>
        </View>

        <View style={styles.containerBtn}>
          <TouchableOpacity style={styles.btnEnviar} onPress={enviarCadastro}>
            <Text style={styles.txtEnvia}>Enviar</Text>
          </TouchableOpacity>
        </View>
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
    marginTop: 45,
    marginBottom: 20,
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
    height: 500,
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
    padding: 1,
    marginLeft: 20,
    marginTop: 20,
    marginRight: 20,
    borderRadius: 6,
  },
  pickerSexoItem: {
    fontSize: 18,
    color: '#067a6e',
    backgroundColor: '#fff',
  },
  txtSlider: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 18,
    color: '#067a6e',
  },
  Slider: {
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    color: '#067a6e',
  },
  txtSaldo: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 18,
    color: '#067a6e',
  },
  containerSwitch: {
    flex: 2,
  },
  rowSwitch: {
    flexDirection: 'row',
  },
  col1Switch: {
    flex: 0.8,
  },
  col2Switch: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  txtSwitch: {
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
    fontSize: 18,
    color: '#067a6e',
  },
  containerBtn: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  btnEnviar: {
    height: 50,
    width: 100,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 12,
    paddingLeft: 12,
    borderWidth: 1,
    borderColor: '#067a6e',
    backgroundColor: '#067a6e',
    borderRadius: 6,
  },
  txtEnvia: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
  },
});
