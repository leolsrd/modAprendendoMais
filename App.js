import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Modal} from 'react-native';
import Detalhes from './src/Detalhes';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  function abrirModal() {
    setModalVisible(true);
  }

  function sairModal() {
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <Button title="ACESSAR" onPress={abrirModal} />

      <Modal transparent={false} animationType="slide" visible={modalVisible}>
        <Detalhes fechar={sairModal} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
